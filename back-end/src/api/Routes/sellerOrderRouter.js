const express = require('express');
const { getAllBySellerId } = require('../Controller/sellerOrderController');

const router = express.Router();

router.post('/orders', getAllBySellerId);

module.exports = router;
