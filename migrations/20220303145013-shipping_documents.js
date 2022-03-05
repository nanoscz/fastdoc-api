'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'shippingDocuments',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        date: Sequelize.DATE,
        payment:  {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        clientId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "clients",
            key: "id"
          }
        },
        employeeId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "employees",
            key: "id"
          }
        },
        motorcyclistId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "motorcyclists",
            key: "id"
          }
        },
        shippingDetailId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "shippingDetails",
            key: "id"
          }
        },
      },
      {
        engine: 'InnoDB',
        charset: 'latin1'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shippingDocuments')
  }
};
