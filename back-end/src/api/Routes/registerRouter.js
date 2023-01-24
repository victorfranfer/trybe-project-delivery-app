const express = require('express');
const insert = require('../Controller/registerController');

const router = express.Router();

router.post('/', insert);

module.exports = router;
