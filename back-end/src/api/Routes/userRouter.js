const express = require('express');
const {
  getSellers,
  getUserByEmail,
  getAllUsers,
  deleteUser,
} = require('../Controller/userController');
const validateTokenMiddleware = require('../Middlewares/validateToken');

const router = express.Router();

router.get('/', validateTokenMiddleware, getAllUsers);
router.delete('/', validateTokenMiddleware, deleteUser);
router.get('/sellers', getSellers);
router.post('/email', getUserByEmail);

module.exports = router;
