'use strict'

module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define(
    'employees',
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
      tableName: 'employees',
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  )

  employees.associate = function (models) {
    employees.hasOne(models.users, {
      foreignKey: 'userId',
      constraints: false
    })
  }

  return employees
}
