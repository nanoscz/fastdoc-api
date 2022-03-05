'use strict'

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      login: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      roleId: {
        type: DataTypes.INTEGER,
        field: 'roleId',
        primaryKey: true
      }
    },
    {
      tableName: 'users',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'userId', 'clientId'] }
      }
    }
  )

  users.associate = function (models) {
    users.belongsTo(models.roles, {
      foreignKey: 'roleId',
      constraints: false
    })
  }

  return users
}
