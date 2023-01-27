const { Sale } = require('../../database/models');

const getAll = async () => {
  const salesList = await Sale.findAll();
  return salesList;
};

const getAllBySellerId = async (sellerId) => {
  const salesListBySellerId = await Sale.findAll({ where: sellerId });
  return salesListBySellerId;
  };

const getOrderBySellerId = async (id, role) => {
  const salesListBySellerId = Sale.findAll({ where: { id, role } });
  return salesListBySellerId;
  };

  module.exports = {
    getAll,
    getAllBySellerId,
    getOrderBySellerId,
  };
