const router = require('express').Router();
const c = require('../controllers/cartController');
const validateId = require('../middleware/validateId');

// POST: Add a new item to cart
router.post('/', c.addToCart);
// PUT/PATCH: Edit cart quantity
router.patch('/:id', validateId, c.updateCartQuantity);
// DELETE: Remove a voucher from cart
router.delete('/:id', validateId, c.removeCartItem);

module.exports = router;