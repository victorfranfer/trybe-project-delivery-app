const userService = require('../Services/userService');

  const getSellers = async (_req, res) => {
    const sellers = await userService.getAllSellers();

    return res.status(200).json(sellers);
  };

  const getUserByEmail = async (req, res) => {
    const { email } = req.body;

    const user = await userService.getUserByEmail(email);

    res.status(201).json(user);
  };

  const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();

    return res.status(200).json(users);
  };

  const deleteUser = async (req, res) => {
    const { email } = req.body;

    const users = await userService.deleteUser(email);

    return res.status(200).json(users);
  };

module.exports = {
  getSellers,
  getUserByEmail,
  getAllUsers,
  deleteUser,
};