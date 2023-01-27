const orderService = require('../Services/sellerOrderService');

const getAllBySellerId = async (_req, res) => {
  const orders = await orderService.getOrderBySellerId();

  return res.status(200).json(orders);
};

module.exports = {
  getAllBySellerId,
};