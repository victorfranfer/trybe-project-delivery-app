const express = require('express');
const { getSellers, getUserByEmail } = require('../Controller/userController');

const router = express.Router();

router.get('/sellers', getSellers);
router.get('/email', getUserByEmail);

module.exports = router;
