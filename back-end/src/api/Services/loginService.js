const md5 = require('md5');
const { createToken } = require('../Utils/jwtUtils');
const { getUserByEmail } = require('./userService');

const loginService = async ({ email, password }) => {
  const e = new Error();
  if (!email || !password) {
    e.message = 'Email or password must be filled';
    e.status = 400;
    throw e;
  }

  const user = await getUserByEmail(email);
  
  const hash = md5(password);

  if (!user || hash !== user.password) {
    e.message = 'Incorrect email or password';
    e.status = 404;
    throw e;
  }

  const { password: _, ...userWithoutPassword } = user;
  const token = createToken(userWithoutPassword);
  return { ...userWithoutPassword, token };
};

module.exports = loginService;