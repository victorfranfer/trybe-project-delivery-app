"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING, DECIMAL, DATE }) {
    await queryInterface.createTable("sales_products", {
      saleId: {
        field: "sale_id",
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        references: {
          model: "sales",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      productId: {
        field: "product_id",
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quantity: {
        type: INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sales_products");
  },
};
