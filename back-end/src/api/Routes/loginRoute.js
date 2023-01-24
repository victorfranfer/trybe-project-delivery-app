const { Router } = require('express');
// import tokenValidation from '../middlewares/tokenValidate';
const loginController = require('../Controller/loginController');

const router = Router();

router.post('/', (req, res) => loginController.login(req, res));
// router.get('/validate', tokenValidation, (req, res) => UserController.userRole(req, res));

module.exports = router;