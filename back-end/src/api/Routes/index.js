const express = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRouter');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);

module.exports = router;
