const express = require('express');
const router = express.Router();
const db = require('./db');


// Get User Products
router.get('/get/:userId', (req, res) => {
    const userId = req.params.userId;
    db.query(`
    SELECT cart.cart_item_id, cart.product_id, products.name, products.price, cart.quantity
    FROM cart
    INNER JOIN products ON cart.product_id = products.product_id
    WHERE cart.user_id = ?`,
        [userId],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json(results);
            }
        });
});


// Add Product to Card
router.post('/add', (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
        res.status(400).json({ error: 'Invalid request data' });
        return;
    }

    db.query(`
    INSERT INTO cart (user_id, product_id, quantity)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)`,
        [user_id, product_id, quantity],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({
                    message: 'Product added to the cart successfully.',
                    cart_item_id: results.insertId
                });
            }
        });
});


// Remove From Card
router.post('/remove', (req, res) => {
    const { user_id, cart_item_id } = req.body;

    if (!user_id || !cart_item_id) {
        res.status(400).json({ error: 'Invalid request data' });
        return;
    }

    db.query('DELETE FROM cart WHERE user_id = ? AND cart_item_id = ?', [user_id, cart_item_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Product removed from the cart successfully.' });
        }
    });
});

module.exports = router;
