const userService = require('../Services/userService');

  const getSellers = async (_req, res) => {
    const sellers = await userService.getAllSellers();

    return res.status(200).json(sellers);
  };

module.exports = {
  getSellers,
};