const { SaleProduct } = require('../../database/models');
const { getProductById } = require('./productService');
const { getSaleById } = require('./saleService');

const validateProductExists = async (productId) => {
  const product = await getProductById(productId);

  if (product) {
    return true;
  }
  return false;
};

const validateSaleValid = async (saleId) => {
  const sale = await getSaleById(saleId);

  if (sale) {
    return true;
  }
  return false;
};

const validateFields = async (productIds, saleId) => {
  const err = new Error();
  err.status = 404;
  const validProducts = productIds.map(async (product) =>
    validateProductExists(product.productId));
  await Promise.all(validProducts);

  if (validProducts.includes(false)) {
    err.message = 'One or more products not found';
    throw err;
  }
  if (!validateSaleValid(saleId)) {
    err.message = 'Sale not found';
    throw err;
  }
};

const createNewSaleProduct = async (productIds, saleId) => {
  await validateFields(productIds, saleId);

  const sales = productIds.map((product) => {
    SaleProduct.create({
      quantity: product.quantity,
      saleId,
      productId: product.productId,
    });
  });

  await Promise.all(sales);
};

module.exports = {
  createNewSaleProduct,
};
