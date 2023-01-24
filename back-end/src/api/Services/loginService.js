const { compare } = require('bcryptjs');
const User = require('../../database/models/User');
const { createToken } = require('../Utils/jwtUtils');

class loginService {
  static async login({ email, password }) {
    const e = new Error();
    if (!email || !password) {
      e.message = 'Email or password must be filled';
      e.status = 400;
      throw e;
    }

    const user = await User.findOne({ where: { email } });

    const isPasswordValid = await compare(password, user.dataValues.password);

    if (!isPasswordValid || !user) {
      e.message = 'Incorrect email or password';
      e.status = 404;
      throw e;
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);
    return { token };
  }
}

module.exports = loginService;