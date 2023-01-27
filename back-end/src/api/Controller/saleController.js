const { createNewSaleProduct } = require('../Services/saleProductService');
const { createNewSale } = require('../Services/saleService');

const createOrder = async (req, res) => {
  const {
    productIds,
  } = req.body;

  const newSale = await createNewSale(req.body);

  await Promise.all([newSale]);

  await createNewSaleProduct(productIds, newSale.id);

  res.status(201).json({ saleId: newSale.id });
};

module.exports = {
  createOrder,
};
