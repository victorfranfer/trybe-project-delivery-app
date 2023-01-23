import User from '../../database/models/User';
import { compare } from 'bcryptjs';

class loginService {
  static async login({ email, password }) {
    if (!email || !password) {
      throw new Error (JSON.stringify({ 
        status: 400,
        message: 'Email or password must be filled',
      }))
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error (JSON.stringify({
        status: 404,
        message: 'Incorrect email or password'
      }))
    }

    const isPasswordValid = await compare(password, user.dataValues.password);

    if (!isPasswordValid) {
      throw new Error (JSON.stringify({
        status: 404,
        message: 'Incorrect email or password'
      }))
    }
  }
}

module.exports = loginService;