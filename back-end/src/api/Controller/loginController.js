import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import loginService from '../Services/loginService';

class loginController {
  static async login(req, res) {
    const login = req.body;

    const result = await loginService.login(login)

    // if (result.status) return res.status(result.status).json({ message: result.message })

    return res.status(200).json({ token: result.token })
  }
}

export default loginController;