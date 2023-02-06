const orderService = require('../Services/sellerOrderService');

const getAllBySellerId = async (req, res) => {
  const { id } = req.body;
  const orders = await orderService.getOrderBySellerId(id);

  return res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  console.log('oi');
  const { id } = req.params;
  const order = await orderService.getOrderById(id);

  return res.status(200).json(order);
};

module.exports = {
  getAllBySellerId,
  getOrderById,
};