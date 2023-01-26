const express = require('express');
const { getAllBySellerId } = require('../Controller/sellerOrderController');

const router = express.Router();

router.get('/', getAllBySellerId);

module.exports = router;
