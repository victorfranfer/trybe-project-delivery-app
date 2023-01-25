const loginService = require('../Services/loginService');

class loginController {
  static async login(req, res) {
    const login = req.body;

    const result = await loginService(login);
    console.log(result);
    return res.status(200).json(result);
  }
}

module.exports = loginController;