const express = require('express');
const loginRouter = require('./loginRoute')

const router = express.Router();

router.use('/login', loginRouter)

module.exports = router;