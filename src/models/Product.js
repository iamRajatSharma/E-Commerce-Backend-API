// src/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    category: String,
    stock: {
        type: Number,
        default: 0,
    },
    images: [String],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
