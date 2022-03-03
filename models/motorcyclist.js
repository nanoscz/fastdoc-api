'use strict'

module.exports = (sequelize, DataTypes) => {
  const motorcyclists = sequelize.define(
    'motorcyclists',
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
      licenseNumber: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING(8),
        allowNull: false
      },
      position: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: true
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
      tableName: 'motorcyclists',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  )

  motorcyclists.associate = function (models) {
    motorcyclists.hasOne(models.users, {
      foreignKey: 'userId',
      constraints: false
    })
  }

  return motorcyclists
}
