"use strict";

module.exports = {
  async up(queryInterface, { INTEGER, STRING }) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      email: {
        type: STRING,
        allowNull: false,
      },
      password: {
        type: STRING,
        allowNull: false,
      },
      role: {
        type: STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
