'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    models.Task.belongsTo(models.User);
    models.Task.belongsToMany(models.Tag, {
      through: 'TagTask'
    })
  };
  return Task;
};