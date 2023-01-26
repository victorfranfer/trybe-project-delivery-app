const orderService = require('../Services/sellerOrderService');

const getAll = async (_req, res) => {
  const orders = await orderService.getAll();

  return res.status(200).json(orders);
};

module.exports = {
  getAll,
};