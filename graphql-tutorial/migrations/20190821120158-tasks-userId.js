'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Tasks',
      'userId',
      {
        type: Sequelize.INTEGER,
        refrences: {
          model: 'Users'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Tasks',
      'userId'
    )
  }
};
