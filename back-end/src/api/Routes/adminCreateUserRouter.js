const express = require('express');
const { adminCreateUser } = require('../Controller/registerController');
const validateTokenMiddleware = require('../Middlewares/validateToken');

const router = express.Router();

router.post('/', validateTokenMiddleware, adminCreateUser);

module.exports = router;
