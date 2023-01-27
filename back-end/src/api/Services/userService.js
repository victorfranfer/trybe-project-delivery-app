const { User } = require('../../database/models');
const { hashPassword } = require('../Utils/jwtUtils');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (user) return user.dataValues;
};

const getUserById = async (id) => {
  const user = User.findOne({ where: { id } });
  return user;
};

const validateFields = (user) => {
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]/i;
  const validEmail = emailRegex.test(user.email);
  const err = new Error();
  err.status = 400;
  if (!user.name || user.name.length < 12) {
    err.message = 'Invalid name';
    throw err;
  }
  if (!validEmail) {
    err.message = 'Invalid email';
    throw err;
  }
  if (user.password.length < 6) {
    err.message = 'Invalid password';
    throw err;
  }
};

//

const createUser = async (user) => {
  const editUser = { ...user };
  
  validateFields(user);
  const userAlreadyExists = await getUserByEmail(user.email);
  
  if (userAlreadyExists) {
    const err = new Error();
    err.status = 409;
    err.message = 'User already exists';
    throw err;
  }

  if (!user.role) {
    editUser.role = 'customer';
  }

  const hash = hashPassword(user.password);
  editUser.password = hash;

  const newUser = await User.create(editUser);

  if (newUser) return newUser.dataValues;
};

const getAllSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' }, attributes: ['name', 'email', 'role'] });
  return sellers;
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  getAllSellers
};
