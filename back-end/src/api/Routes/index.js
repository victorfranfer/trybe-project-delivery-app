const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRouter');
const productRouter = require('./productRouter');
const validateTokenMiddleware = require('../Middlewares/validateToken');
const saleRouter = require('./saleRouter');
const orderRouter = require('./orderRouter');
const sellerOrderRouter = require('./sellerOrderRouter');
const adminCreateUserRouter = require('./adminCreateUserRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/sale', saleRouter);
router.use('/products', productRouter);
router.use('/user', userRouter);

router.use('/customer', orderRouter);
router.use('/seller', sellerOrderRouter);
router.use('/admin/manage', adminCreateUserRouter);
router.use('/validate', validateTokenMiddleware);

module.exports = router;
