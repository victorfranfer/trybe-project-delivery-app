const express = require('express');
const registerRouter = require('./registerRouter');

const router = express.Router();

router.use('/register', registerRouter);

module.exports = router;
