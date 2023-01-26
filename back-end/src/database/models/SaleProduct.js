const SaleProduct = (sequelize, { INTEGER, STRING, DECIMAL, DATE }) => {
  const SaleProduct = sequelize.define(
    'SaleProduct',
    {
      // saleId: {
      //   type: INTEGER,
      //   allowNull: false,
      //   field: 'sale_id'
      // },
      // productId: {
      //   type: INTEGER,
      //   allowNull: false,
      //   field: 'product_id'
      // },
      quantity: {
        type: INTEGER,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'sales_products',
    }
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'product_id', // se refere a outra chave de `users_books`
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'product_id', // se refere ao id de User na tabela de `users_books`
      otherKey: 'sale_id',
    });
  };

  return SaleProduct;
};

module.exports = SaleProduct;
