// controllers/voucherController.js
const mongoose = require('mongoose');
const Voucher = require('../models/Voucher');
 
// CREATE
exports.createVoucher = async (req, res) => {
  try {
    const voucher = await Voucher.create(req.body);
    res.status(201).json(voucher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
// READ all (with category joined in)
// Supports: GET /api/vouchers?category=ID
exports.getVouchers = async (req, res) => {
  try {
    const filter = req.query.category ? { category_id: req.query.category } : {};
    const list = await Voucher.find(filter).populate('category_id');
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ one
exports.getVoucherById = async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id).populate('category_id');
    if (!voucher) return res.status(404).json({ message: 'Voucher not found' });
    res.status(200).json(voucher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
