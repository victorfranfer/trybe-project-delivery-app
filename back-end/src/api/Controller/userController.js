const userService = require('../Services/userService');

  const getSellers = async (_req, res) => {
    const sellers = await userService.getAllSellers();

    return res.status(200).json(sellers);
  };

  const getUserByEmail = async (req, res) => {
    const { email } = req.body;

    const user = await userService.getUserByEmail(email);

    res.status(200).json(user);
  }

module.exports = {
  getSellers,
  getUserByEmail,
};