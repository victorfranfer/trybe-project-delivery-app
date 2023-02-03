const { SaleProduct } = require('../../database/models');
const { getProductById } = require('./productService');

const validateProductExists = async (productId) => {
  const product = await getProductById(productId);

  if (product) {
    return true;
  }
  return false;
};

const validateFields = async (productIds) => {
  const err = new Error();
  err.status = 404;

  const validProducts = productIds.map(async (product) =>
    validateProductExists(product.productId));

  const verifyList = await Promise.all(validProducts);

  if (verifyList.includes(false)) {
    err.message = 'One or more products not found';
    throw err;
  }
};

const createNewSaleProduct = async (productIds, saleId) => {
  await validateFields(productIds);

  const sales = productIds.map(async (product) => {
    const sale = await SaleProduct.create({
      quantity: product.quantity,
      saleId,
      productId: product.productId,
    });

    return sale;
  });

  const [result] = await Promise.all(sales);

  return result.dataValues;
};

module.exports = {
  createNewSaleProduct,
};
