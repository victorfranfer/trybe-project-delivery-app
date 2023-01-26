const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRouter');
const saleRouter = require('./saleRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/sale', saleRouter);

module.exports = router;
