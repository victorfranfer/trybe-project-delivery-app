const Product = (sequelize, { INTEGER, STRING, DECIMAL }) => {
  const Product = sequelize.define(
    'Product',
    {
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
        field: 'price',
        allowNull: false,
      },
      urlImage: {
        type: STRING(200),
        field: 'url_image',
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'products',
    }
  );

  return Product;
};

module.exports = Product;
