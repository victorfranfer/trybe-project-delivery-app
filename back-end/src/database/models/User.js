const User = (sequelize, { INTEGER, STRING }) => {
  const User = sequelize.define(
    'User',
    {
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
    },
    {
      underscored: true,
      timestamps: false,
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: 'userId',
      as: 'user',
    });
    User.hasMany(models.Sale, {
      foreignKey: 'sellerId',
      as: 'seller',
    });
  };
  return User;
};

module.exports = User;
