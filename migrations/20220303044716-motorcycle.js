'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'motorcycles',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        licensePlate: {
          type: Sequelize.STRING(10),
          allowNull: false,
          unique: true
        },
        model: {
          type: Sequelize.STRING(15),
          allowNull: false
        },
        marca: {
          type: Sequelize.STRING(15),
          allowNull: false
        },
        motorcyclistId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'motorcyclists',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      },
      {
        engine: 'InnoDB',
        charset: 'latin1'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('motorcycles')
  }
}
