const mongoose = require('mongoose');
const CartItem = require('../models/CartItem');

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const newItem = await CartItem.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update quantity
exports.updateCartQuantity = async (req, res) => {
  try {
    const updated = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Cart item not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove from cart
exports.removeCartItem = async (req, res) => {
  try {
    const deleted = await CartItem.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Cart item not found' });
    res.status(200).json({ message: 'Item removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};