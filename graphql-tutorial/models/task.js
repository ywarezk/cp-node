'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'Users'
      }
    }
  }, {});
  Task.associate = function(models) {
    models.Task.belongsTo(models.User);
  };
  return Task;
};