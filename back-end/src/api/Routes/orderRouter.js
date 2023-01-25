const express = require('express');
const { getAllBySellerId } = require('../Controller/orderController');

const router = express.Router();

router.get('/', getAllBySellerId);

module.exports = router;