const { Sale }= require("../../database/models")

  const getAll = async () => {
    const salesList = await Sale.findAll();
    return salesList;
  }

module.exports = {
  getAll,
}