const { Sale, Product } = require('../../database/models');

const getOrderBySellerId = async (id) => {
  const salesListBySellerId = await Sale.findAll({ where: { sellerId: id } });
  return salesListBySellerId;
};

const getOrderById = async (id) => {
  const saleById = await Sale.findAll(
    { where: { id },
      include: [{ model: Product, as: 'products', through: { attributes: [] } }],
    });
  return saleById;
}

  module.exports = {
    getOrderBySellerId,
    getOrderById,
  };
