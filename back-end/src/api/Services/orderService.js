const { Sale } = require('../../database/models');

  const getAllById = async (id) => {
    const orderList = await Sale.findAll({ where: { userId: id } });
    return orderList;
  };

module.exports = {
  getAllById,
};