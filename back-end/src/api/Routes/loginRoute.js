import { Router } from 'express';
// import tokenValidation from '../middlewares/tokenValidate';
import UserController from '../controller/loginController';

const router = Router();

router.post('/', (req, res) => loginController.login(req, res));
// router.get('/validate', tokenValidation, (req, res) => UserController.userRole(req, res));

module.exports = router;