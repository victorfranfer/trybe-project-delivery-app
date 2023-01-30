const { Router } = require('express');
const loginController = require('../Controller/loginController');

const router = Router();

router.post('/', (req, res) => loginController.login(req, res));

module.exports = router;