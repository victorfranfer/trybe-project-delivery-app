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

  console.log(email);
  console.log(user);

  const hash = md5(password);

  if (!user || hash !== user.dataValues.password) {
    e.message = 'Incorrect email or password';
    e.status = 404;
    throw e;
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  return { token };
};

module.exports = loginService;