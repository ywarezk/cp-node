'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.addColumn(
      'TagTask',
      'createdAt',
      {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    );
    await queryInterface.addColumn(
      'TagTask',
      'updatedAt',
      {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Tasks',
      'createdAt'
    )
    await queryInterface.removeColumn(
      'Tasks',
      'updatedAt'
    )
  }
};
