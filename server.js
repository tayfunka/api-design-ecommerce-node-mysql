const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./products');
const cartRouter = require('./cart');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
