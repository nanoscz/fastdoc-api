'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'coords',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        origin: {
          type: Sequelize.GEOMETRY('POINT'),
          allowNull: true
        },
        destination: {
          type: Sequelize.GEOMETRY('POINT'),
          allowNull: true
        },
      },
      {
        engine: 'InnoDB',
        charset: 'latin1'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coords')
  }
};
