/**
 * GraphQL Schema
 * defines the type Task
 * defines query, mutation to get all tasks and create a new task
 */

 const { gql } = require('apollo-server-express');

 module.exports = gql`
    
    type Task {
        id: ID!
        title: String
        description: String
        userId: Int
        user: User
    }

    type Query {
        getAllTasks: [Task]
    }

    type Mutation {
        createTask(title: String!, description: String, userId: Int): Task
    }

 `