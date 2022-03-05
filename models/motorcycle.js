'use strict'

module.exports = (sequelize, DataTypes) => {
  const motorcycles = sequelize.define(
    'motorcycles',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      licensePlate: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
      },
      color: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      marca: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      motorcyclistId: {
        type: DataTypes.INTEGER,
        field: 'motorcyclistId',
        primaryKey: true
      }
    },
    {
      tableName: 'motorcycles',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  )

  motorcycles.associate = function (models) {
    motorcycles.belongsTo(models.motorcyclists, {
      foreignKey: 'motorcyclistId',
      constraints: false
    })
  }

  return motorcycles
}
