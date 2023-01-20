const Sale = (sequelize, { INTEGER, STRING, DECIMAL, DATE }) => {
  const Sale = sequelize.define(
    "Sale",
    {
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
        foreignKey: true,
      },
      sellerId: {
        type: INTEGER,
        allowNull: false,
        field: "seller_id",
        foreignKey: true,
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
    },
    {
      underscored: true,
      timestamps: false,
      tableName: "sales",
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    Sale.belongsTo(models.User, {
      foreignKey: "seller_id",
      as: "user",
    });
  };
  return Sale;
};

module.exports = Sale;
