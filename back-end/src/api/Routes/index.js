const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRouter');
const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

module.exports = router;
