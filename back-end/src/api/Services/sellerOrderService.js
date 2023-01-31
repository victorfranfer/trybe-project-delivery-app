const { Sale, Product, User } = require('../../database/models');

const getOrderBySellerId = async (id) => {
  const salesListBySellerId = await Sale.findAll({ where: { sellerId: id } });
  return salesListBySellerId;
};

const getOrderById = async (id) => {
  const saleById = await Sale.findOne(
    { where: { id },
      attributes: {exclude: ['userId', 'sellerId']},
      include: [{ model: Product, as: 'products', through: { attributes: ['quantity'] } },
        {model: User, as: 'seller'},
        {model: User, as: 'user'}],
    });
  return saleById;
}

  module.exports = {
    getOrderBySellerId,
    getOrderById,
  };
