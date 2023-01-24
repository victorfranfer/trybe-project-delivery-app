// "use strict";

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert(
//       "sales",
//       [
//         {
//           user_id: 1,
//           seller_id: 2,
//           total_price: 100.00,
//           delivery_address: 'rua 1, N10',
//           delivery_number: "100",
//           sale_date: '2001-03-14',
//           status: 'concluído',
//         },
//         {
//           user_id: 1,
//           seller_id: 2,
//           total_price: 100.00,
//           delivery_address: 'rua 1, N15',
//           delivery_number: "100",
//           sale_date: '2001-03-14',
//           status: 'concluído',
//         },
//         {
//           user_id: 1,
//           seller_id: 2,
//           total_price: 50.00,
//           delivery_address: 'rua 1, N10',
//           delivery_number: "100",
//           sale_date: '2001-03-14',
//           status: 'concluído',
//         },
//       ],
//       {}
//     );
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete("sales", null, {});
//   },
// };
