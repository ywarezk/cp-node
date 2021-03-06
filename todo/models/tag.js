'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    models.Tag.belongsToMany(models.Task, {
      through: 'TagTask',
      as: 'tasks',
      foreignKey: 'tagId',
      otherKey: 'taskId'
    })
  };
  return Tag;
};