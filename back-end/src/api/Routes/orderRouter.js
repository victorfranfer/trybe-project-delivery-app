const express = require('express');
const { getAll } = require('../Controller/orderController');

const router = express.Router();

router.post('/orders', getAll);

module.exports = router;