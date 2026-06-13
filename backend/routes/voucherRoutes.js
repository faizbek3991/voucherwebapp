// routes/voucherRoutes.js
const router = require('express').Router();
const c = require('../controllers/voucherController');
const validateId = require('../middleware/validateId');
 
router.post('/', c.createVoucher);
router.get('/', c.getVouchers);
router.get('/:id', validateId, c.getVoucherById);
 
module.exports = router;
