"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING, DECIMAL, DATE }) {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      userId: {
        type: INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sellerId: {
        type: INTEGER,
        allowNull: false,
        field: "seller_id",
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      totalPrice: {
        type: DECIMAL(9,2),
        field: "total_price",
        allowNull: false,
      },
      deliveryAddress: {
        type: STRING(100),
        field: "delivery_address",
        allowNull: false,
      },
      deliveryNumber: {
        type: STRING(50),
        field: "delivery_number",
        allowNull: false,
      },
      saleDate: {
        type: DATE,
        field: "sale_date",
        allowNull: false,
      },
      status: {
        type: STRING(50),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sales");
  },
};
