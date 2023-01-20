"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: 'agua',
          price: 30.00,
          url_image: 'image.png',
        },
        {
          name: 'agua com gás',
          price: 10.00,
          url_image: 'image2.png',
        },
        {
          name: 'agua de coco',
          price: 50.00,
          url_image: 'image3.png',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
