// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

// Public Routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Protected/Admin Routes (for later we’ll add auth middleware)
router.post('/', protect, adminOnly, productController.createProduct);
router.put('/:id', protect, adminOnly, productController.updateProduct);
router.delete('/:id', protect, adminOnly, productController.deleteProduct);

module.exports = router;
