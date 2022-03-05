'use strict'

module.exports = (sequelize, DataTypes) => {
  const shippingDetails = sequelize.define(
    'shippingDetails',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name_origin: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      name_destination: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      phone_origin: {
        type: DataTypes.STRING(8),
        allowNull: false
      },
      phone_destination: {
        type: DataTypes.STRING(8),
        allowNull: false
      },
      documentType: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      coordId: {
        type: DataTypes.INTEGER,
        field: 'coordId',
        primaryKey: true
      }
    },
    {
      timestamps: false,
      tableName: 'shippingDetails',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  )

  shippingDetails.associate = function (models) {
    shippingDetails.hasOne(models.coords, {
      foreignKey: 'coordId',
      constraints: false
    })
  }

  return shippingDetails
}
