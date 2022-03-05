'use strict'

module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define(
    'clients',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      surnames: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(8),
        allowNull: false
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'userId',
        primaryKey: true
      }
    },
    {
      tableName: 'clients',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'clientId'] }
      }
    }
  )

  clients.associate = function (models) {
    clients.hasOne(models.users, {
      foreignKey: 'userId',
      constraints: false
    })
  }

  return clients
}
