const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const database = require('./config/database');
database
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes Placeholder
app.get('/', (req, res) => {
  res.send('E-Commerce API is running...');
});


// Import Routes
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use('/api/cart-items', require('./routes/cartItemRoutes'));


// run the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});