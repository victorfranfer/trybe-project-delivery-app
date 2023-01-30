const orderService = require('../Services/sellerOrderService');

const getAllBySellerId = async (req, res) => {
  const { id } = req.body;
  const orders = await orderService.getOrderBySellerId(id);
  console.log(orders);

  return res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  const { id } = req.body;
  const order = await orderService.getOrderById(id);
  console.log(order);

  return res.status(200).json(order);
}

module.exports = {
  getAllBySellerId,
  getOrderById,
};