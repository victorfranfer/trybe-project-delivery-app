const userService = require('../Services/userService');

const insert = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  res.status(201).json(newUser);
};

module.exports = insert;