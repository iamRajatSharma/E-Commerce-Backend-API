// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const database = require('./config/database');
database // Initialize the database connection
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes Placeholder
app.get('/', (req, res) => {
  res.send('E-Commerce API is running...');
});


