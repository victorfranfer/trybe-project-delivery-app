const express = require('express');
const { getAllBySellerId, getOrderById } = require('../Controller/sellerOrderController');

const router = express.Router();

router.post('/orders', getAllBySellerId);
router.get('/orders/:id', getOrderById);

module.exports = router;
