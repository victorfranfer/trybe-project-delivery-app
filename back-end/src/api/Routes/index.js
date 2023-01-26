const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRouter');
const productRouter = require('./productRouter');
// const tokenRouter = require('./tokenRoute');
const saleRouter = require('./saleRouter');
const orderRouter = require('./orderRouter');
const sellerOrderRouter = require('./sellerOrderRouter');
const adminCreateUserRouter = require('./adminCreateUserRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productRouter);
// router.use('/validate', tokenRouter);
router.use('/sale', saleRouter);
router.use('/orders', orderRouter);
router.use('/seller/orders', sellerOrderRouter);
router.use('/admin/manage', adminCreateUserRouter);

module.exports = router;
