'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products',
    [{
      id: 1,
      name: 'Skol Lata 250ml',
      price: 2.20,
      url_image: 'skol_lata_350ml',
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: 7.50,
      url_image: 'heineken_600ml',
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      url_image: 'antarctica_pilsen_300ml',
    },
    {
      id: 4,
      name: 'Brahma 600ml',
      price: 7.50,
      url_image: 'brahma_600ml',
    },
    {
      id: 5,
      name: 'Skol 269ml',
      price: 2.19,
      url_image: 'skol_269ml',
    },
    {
      id: 6,
      name: 'Skol Beats Senses 313ml',
      price: 4.49,
      url_image: 'skol_beats_senses_313ml',
    },
    {
      id: 7,
      name: 'Becks 330ml',
      price: 4.99,
      url_image: 'becks_330ml',
    },
    {
      id: 8,
      name: 'Brahma Duplo Malte 350ml',
      price: 2.79,
      url_image: 'brahma_duplo_malte_350ml',
    },
    {
      id: 9,
      name: 'Becks 600ml',
      price: 8.89,
      url_image: 'becks_600ml',
    },
    {
      id: 10,
      name: 'Skol Beats Senses 269ml',
      price: 3.57,
      url_image: 'skol_beats_senses_269ml',
    },
    {
      id: 11,
      name: 'Stella Artois 275ml',
      price: 3.49,
      url_image: 'stella_artois_275ml',
    }
    ], { timestamps: false })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulDelete('products', null, {});
  }
};
