const express = require('express');
const saleController = require('../Controller/saleController');

const router = express.Router();

router.post('/register-order', saleController.createOrder);

module.exports = router;
