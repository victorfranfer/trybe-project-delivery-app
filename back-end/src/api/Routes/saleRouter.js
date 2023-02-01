const express = require('express');
const { getOrderById } = require('../Controller/sellerOrderController');
const saleController = require('../Controller/saleController');

const router = express.Router();

router.post('/register-order', saleController.createOrder);
router.get('/order/:id', getOrderById);
router.put('/order/:id', saleController.updateSaleByIdController);

module.exports = router;
