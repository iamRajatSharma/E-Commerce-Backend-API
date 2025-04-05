// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Public Routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Protected/Admin Routes (for later we’ll add auth middleware)
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
