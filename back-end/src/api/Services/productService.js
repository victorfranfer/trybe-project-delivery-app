const { Product } = require('../../database/models');

  const getAll = async () => {
    const productsList = await Product.findAll();
    return productsList;
  };

module.exports = {
  getAll,
};