const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// Add or update product in cart
exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const existingItem = await CartItem.findOne({ product: productId, addedBy: userId });

        if (existingItem) {
            existingItem.quantity = quantity;
            await existingItem.save();
            return res.json({ success: true, data: existingItem });
        }

        const newItem = await CartItem.create({
            product: productId,
            quantity,
            priceAtTime: product.price,
            addedBy: userId
        });

        res.status(201).json({ success: true, data: newItem });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get all items for logged-in user's cart
exports.getMyCart = async (req, res) => {
    try {
        const items = await CartItem.find({ addedBy: req.user._id }).populate('product');
        res.json({ success: true, data: items });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update quantity of an item
exports.updateCartItem = async (req, res) => {
    const { itemId } = req.params;
    const { quantity } = req.body;

    try {
        const item = await CartItem.findOne({ _id: itemId, addedBy: req.user._id });
        if (!item) return res.status(404).json({ message: 'Item not found' });

        item.quantity = quantity;
        await item.save();
        res.json({ success: true, data: item });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Remove item from cart
exports.removeCartItem = async (req, res) => {
    const { itemId } = req.params;

    try {
        const item = await CartItem.findOneAndDelete({ _id: itemId, addedBy: req.user._id });
        if (!item) return res.status(404).json({ message: 'Item not found' });

        res.json({ success: true, message: 'Item removed' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
