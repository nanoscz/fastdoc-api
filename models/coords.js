'use strict'

module.exports = (sequelize, DataTypes) => {
  const coords = sequelize.define(
    'coords',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      origin: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: true
      },
      destination: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: true
      },
    },
    {
      timestamps: false,
      tableName: 'coords',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  )

  return coords
}
