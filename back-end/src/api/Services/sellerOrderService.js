const { Sale } = require('../../database/models');

const getAll = async () => {
  const salesList = await Sale.findAll();
  return salesList;
};

const getAllBySellerId = async (sellerId) => {
  const salesListBySellerId = await Sale.execute(
    'SELECT * FROM Sale WHERE id = ?',
    [sellerId],
  );
  return salesListBySellerId;
};

module.exports = {
  getAll,
  getAllBySellerId,
};