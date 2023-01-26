const { Sale } = require('../../database/models');

  const getAll = async () => {
    const orderList = await Sale.findAll();
    return orderList;
  };

module.exports = {
  getAll,
};