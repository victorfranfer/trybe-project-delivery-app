const { Sale } = require('../../database/models');

const getOrderBySellerId = async (id) => {
  const salesListBySellerId = await Sale.findAll({ where: { sellerId: id } });
  return salesListBySellerId;
};

const getOrderById = async (id) => {
  const saleById = await Sale.findOne({ where: { id } });
  return saleById;
}

  module.exports = {
    getOrderBySellerId,
    getOrderById,
  };
