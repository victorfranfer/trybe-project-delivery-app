"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING, DECIMAL, DATE }) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      name: {
        type: STRING(100),
        allowNull: false,
      },
      price: {
        type: DECIMAL(4,2),
        field: "total_price",
        allowNull: false,
      },
      urlImage: {
        type: STRING(200),
        field: "url_image",
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
