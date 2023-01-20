"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "teste@email.com",
          password: "123456",
          role: "user",
        },
        {
          name: "John Doe",
          email: "email@email.com",
          password: "123456",
          role: "seller",
        },
        {
          name: "John Doe",
          email: "teste@teste.com",
          password: "123456",
          role: "admin",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
