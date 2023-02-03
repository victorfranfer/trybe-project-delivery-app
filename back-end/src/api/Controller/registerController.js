const userService = require('../Services/userService');

const insert = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  res.status(201).json(newUser);
};

const adminCreateUser = async (req, res) => {
  const createUser = req.body;
  const loggedUser = req.body.user;
  const newUser = await userService.adminCreateUser(createUser, loggedUser);

  res.status(201).json(newUser);
};

module.exports = { insert, adminCreateUser }; 