'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales',
    [
      {
        id: 1,
        userId: 3,
        sellerId: 2,
        totalPrice:23.80,
        deliveryAddress:'Rua Irmão Monteiro, Bairo Pedras, 851',
        deliveryNumber:'542345812',
        saleDate:2021-04-08,
        status:'Pendente',
      },
      {
        id: 2,
        userId: 3,
        sellerId: 2,
        totalPrice:14.20,
        deliveryAddress:'Rua Vila Bela, Bairro Gurupi, 670',
        deliveryNumber:'84524574',
        saleDate:2021-04-08,
        status:'Preparando',
      },
      {
        id: 3,
        userId: 3,
        sellerId: 2,
        totalPrice:28.46,
        deliveryAddress:'Rua Rua Sessenta e Dois, Bairro Maranguape II, 533',
        deliveryNumber:'452137895',
        saleDate:2021-04-07,
        status:'Entrege',
      },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
