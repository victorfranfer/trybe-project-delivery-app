const { JwtPayload, verify, sign } = require('jsonwebtoken');
const md5 = require('md5');

const jwtSecret = 'secret_key';

const createToken = (payload) => {
  const token = sign(payload, jwtSecret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  console.log(JwtPayload, verify);

  return token;
};
// export const validateToken = (token) => {
//   try {
//     const data = verify(token, jwtSecret);

//     console.log(data, 'validate');

//     return data;
//   } catch (error) {
//     return null;
//   }
// };
const hashPassword = (password) => md5(password);

module.exports = {
  hashPassword,
  createToken,
};
