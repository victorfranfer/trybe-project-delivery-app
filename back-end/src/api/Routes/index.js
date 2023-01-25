const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRouter');
const productRouter = require('./productRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/products', productRouter);

module.exports = router;
