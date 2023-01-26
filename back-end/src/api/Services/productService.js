const { Product } = require('../../database/models');

const getProductById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  return product;
};

module.exports = {
  getProductById,
};
