const express = require('express');
const router = express.Router();
const db = require('./db');

// Get Products
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

// Products Details
router.get('/details/:productId', (req, res) => {
    const productId = req.params.productId;
    db.query(`SELECT * FROM products WHERE product_id = ?`, [productId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(results[0]);
        }
    });
});

// Create Product
router.post('/create', (req, res) => {
    const { name, price, description, stock } = req.body;

    if (!name || !price || !description || !stock) {
        res.status(400).json({ error: 'Invalid request data' });
        return;
    }

    db.query('INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, ?)',
        [name, price, description, stock],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error', details: err.message });
            } else {
                res.json({
                    message: 'Product created successfully.',
                    product_id: results.insertId
                });
            }
        });
});

module.exports = router;
