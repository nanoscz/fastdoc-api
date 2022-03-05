'use strict'

module.exports = (sequelize, DataTypes) => {
  const shippingDocuments = sequelize.define(
    'shippingDocuments',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      date: DataTypes.DATE,
      payment:  {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: 'clientId',
        primaryKey: true
      },
      employeeId: {
        type: DataTypes.INTEGER,
        field: 'employeeId',
        primaryKey: true
      },
      motorcyclistId: {
        type: DataTypes.INTEGER,
        field: 'motorcyclistId',
        primaryKey: true
      },
      shippingDetailId: {
        type: DataTypes.INTEGER,
        field: 'shippingDetailId',
        primaryKey: true
      },
    },
    {
      timestamps: false,
      tableName: 'shippingDocuments',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  )

  shippingDocuments.associate = function (models) {
    shippingDocuments.hasOne(models.clients, {
      foreignKey: 'clientId',
      constraints: false
    }),
    shippingDocuments.hasOne(models.employees, {
      foreignKey: 'employeeId',
      constraints: false
    }),
    shippingDocuments.hasOne(models.motorcycles, {
      foreignKey: 'motorcycleId',
      constraints: false
    }),
    shippingDocuments.hasOne(models.shippingDetails, {
      foreignKey: 'shippingDetailId',
      constraints: false
    })
  }

  return shippingDocuments
}
