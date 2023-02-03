const sellerOrderService = require('../Services/sellerOrderService');

const getAllBySellerId = async (req, res) => {
  const { id } = req.body;
  const orders = await sellerOrderService.getOrderBySellerId(id);

  return res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await sellerOrderService.getOrderById(id);

  return res.status(200).json(order);
};

module.exports = {
  getAllBySellerId,
  getOrderById,
};