const { Product } = require('../../database/models');

  const getAll = async () => {
    const productsList = await Product.findAll();
    return productsList;
  };
  
  const getProductById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  return product;
};

module.exports = {
  getAll,
  getProductById,
};
