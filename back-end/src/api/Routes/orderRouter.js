const express = require('express');
const { getAll } = require('../Controller/orderController');

const router = express.Router();

router.post('/order', getAll);

module.exports = router;