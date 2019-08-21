/**
 * gql definition of user and the queries and mutation
 */

 const { gql } = require('apollo-server-express');

 module.exports = gql`
    
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
        jwtToken: String
    }

    extend type Query {
        getAllUsers: [User]
    }

    extend type Mutation {
        register(firstName: String, lastName: String, email: String!, password: String!): User 
        login(email: String!, password: String!): User
    }

 `