const { Sale } = require('../../database/models');
const { getUserById } = require('./userService');

const validateSaleFields = async (sale) => {
  const err = new Error();
  const user = await getUserById(sale.userId);
  const seller = await getUserById(sale.sellerId);

  const fields = [sale.totalPrice, sale.deliveryAddess, sale.deliveryNumber, sale.quantity];

  if (!user) {
    err.message = 'User not fund';
    err.status = 404;
    throw err;
  }

  if (!seller) {
    err.message = 'Seller not fund';
    err.status = 404;
    throw err;
  }

  if (fields.includes(undefined)) {
    err.message = 'Some fields are missing';
    err.message = 400;
  }
};

const getSaleById = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  return sale;
};

const createNewSale = async (sale) => {
  await validateSaleFields(sale);

  const saleFields = { status: 'Pendente', saleDate: new Date(), ...sale };

  const newSale = await Sale.create(saleFields);

  return newSale;
};

const updateSaleById = async (id) => {
  const [updatedSale] = await Sale.update(
    { status: 'entregue' },
    { where: { id } }, 
  );

  return updatedSale;
};

module.exports = {
  getSaleById,
  createNewSale,
  updateSaleById,
};
