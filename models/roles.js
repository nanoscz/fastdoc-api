'use strict'

module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define(
    'roles',
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
      }
    },
    {
      timestamps: false,
      tableName: 'roles',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'roleId'] }
      }
    }
  )

  return roles
}
