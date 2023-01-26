const productService = require('../Services/orderService');

  const getAll = async (_req, res) => {
    const orders = await productService.getAll();

    return res.status(200).json(orders);
  };

module.exports = {
  getAll,
};