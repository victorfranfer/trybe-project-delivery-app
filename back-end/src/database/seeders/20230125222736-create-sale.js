'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales',
    [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 23.80,
        delivery_address: 'Rua Irmão Monteiro, Bairo Pedras, 851',
        delivery_number: '542345812',
        sale_date: "2021-04-08T00:00:00.000Z",
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 14.20,
        delivery_address: 'Rua Vila Bela, Bairro Gurupi, 670',
        delivery_number: '84524574',
        sale_date: "2021-04-08T00:00:00.000Z",
        status: 'Preparando',
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 28.46,
        delivery_address: 'Rua Rua Sessenta e Dois, Bairro Maranguape II, 533',
        delivery_number: '452137895',
        sale_date: "2021-04-07T00:00:00.000Z",
        status: 'Entregue',
      },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
