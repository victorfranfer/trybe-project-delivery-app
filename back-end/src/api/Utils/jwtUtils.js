import { JwtPayload, verify, sign } from 'jsonwebtoken';

const jwtSecret = 'secret_key';

const createToken = (payload) => {
  const token = sign(payload, jwtSecret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

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

module.exports = createToken;