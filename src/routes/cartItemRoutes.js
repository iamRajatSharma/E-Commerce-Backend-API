const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');
const { protect } = require('../middlewares/authMiddleware');

// All routes protected (only logged-in users)
router.post('/add', protect, cartItemController.addToCart);
router.get('/', protect, cartItemController.getMyCart);
router.put('/:itemId', protect, cartItemController.updateCartItem);
router.delete('/:itemId', protect, cartItemController.removeCartItem);

module.exports = router;
