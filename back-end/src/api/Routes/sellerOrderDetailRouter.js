const express = require('express');
const { getOrderById } = require('../Controller/sellerOrderController');

const router = express.Router();

router.post('/orders/:id', getOrderById);

module.exports = router;