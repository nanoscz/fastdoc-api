'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'shippingDetails',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name_origin: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        name_destination: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        phone_origin: {
          type: Sequelize.STRING(8),
          allowNull: false
        },
        phone_destination: {
          type: Sequelize.STRING(8),
          allowNull: false
        },
        documentType: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        coordId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "coords",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
      },
      {
        engine: 'InnoDB',
        charset: 'latin1'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shippingDetails')
  }
};
