const express = require('express');
const { getSellers, getUserByEmail } = require('../Controller/userController');

const router = express.Router();

router.get('/sellers', getSellers);
router.post('/email', getUserByEmail);

module.exports = router;
