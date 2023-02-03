const { createNewSaleProduct } = require('../Services/saleProductService');
const saleService = require('../Services/saleService');

const createOrder = async (req, res) => {
  const {
    productIds,
  } = req.body;

  const newSale = await saleService.createNewSale(req.body);

  await createNewSaleProduct(productIds, newSale.id);

  res.status(201).json({ saleId: newSale.id });
};

const updateSaleByIdController = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedSale = await saleService.updateSaleById(Number(id), { status });

  res.status(201).json(updatedSale);
};

module.exports = {
  createOrder,
  updateSaleByIdController,
};
