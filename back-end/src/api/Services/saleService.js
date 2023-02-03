const { Sale } = require('../../database/models');
const { getUserById } = require('./userService');

const validateSaleFields = async (sale) => {
  const err = new Error();
  const user = await getUserById(sale.userId);
  const seller = await getUserById(sale.sellerId);

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
};

const createNewSale = async (sale) => {
  await validateSaleFields(sale);

  const saleFields = { status: 'Pendente', saleDate: new Date(), ...sale };

  const newSale = await Sale.create(saleFields);

  return newSale.dataValues;
};

const updateSaleById = async (id, body) => {
  if (!body.status) {
    const [updatedSale] = await Sale.update(
      { status: 'Entregue' },
      { where: { id } }, 
    );

    return updatedSale;
  }

  const [updatedSale] = await Sale.update(
    { status: body.status },
    { where: { id } },
  );

  return updatedSale;
};

module.exports = {
  createNewSale,
  updateSaleById,
};
