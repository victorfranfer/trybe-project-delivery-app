const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRouter');
const productRouter = require('./productRouter');
// const tokenRouter = require('./tokenRoute');
const saleRouter = require('./saleRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productRouter);
// router.use('/validate', tokenRouter);
router.use('/sale', saleRouter);

module.exports = router;
