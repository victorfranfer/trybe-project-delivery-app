const { verify, sign } = require('jsonwebtoken');
const fs = require('fs/promises');
const md5 = require('md5');

const getKey = async () => {
    const key = await fs.readFile('jwt.evaluation.key', 'utf8');
    return key;
};

const createToken = async (payload) => {
  const key = await getKey();

  const token = sign(payload, key, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = async (token) => {
  const key = await getKey();

  try {
    const data = verify(token, key);

    return data;
  } catch (error) {
    return { error: 'Invalid Token' };
  }
};

const hashPassword = (password) => md5(password);

module.exports = {
  hashPassword,
  createToken,
  validateToken,
};
