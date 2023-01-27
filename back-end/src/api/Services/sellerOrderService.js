const { Sale } = require('../../database/models');

const getAll = async () => {
  const salesList = await Sale.findAll();
  return salesList;
};

const getAllBySellerId = async (sellerId) => {
  const salesListBySellerId = await Sale.findAll({ where: sellerId });
  return salesListBySellerId;
  };

const getOrderBySellerId = async (id) => {
  const salesListBySellerId = await Sale.findAll({ where: { sellerId: id } });
  return salesListBySellerId;
  };

  module.exports = {
    getAll,
    getAllBySellerId,
    getOrderBySellerId,
  };
