const productService = require('../Services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

module.exports = {
  getAll,
};