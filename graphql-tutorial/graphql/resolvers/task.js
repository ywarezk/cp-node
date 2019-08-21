const { Task, User } = require('../../models');
const { AuthenticationError } = require('apollo-server-express');

module.exports = {
    Task: {
        user: (parent) => {
            return User.findByPk(parent.userId);
        }
    },
    Query: {
        // context.user
        getAllTasks: (parent, args, context) => {
            if (!context.user) throw new AuthenticationError('jwt please?');
            return Task.findAll();
        }
    },
    Mutation: {
        createTask: (parent, args) => {
            return Task.create(args);
        }
    }
}