'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('TagTask', { 
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true
     },
     tagId: {
       type: Sequelize.INTEGER,
       references: {
         model: 'Tags',
         key: 'id'
       }
     },
     taskId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tasks',
          key: 'id'
        }
      },
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('TagTask');
  }
};
