/**
 * create the apollo server instance
 */

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { User } = require('../models')

const schema = makeExecutableSchema({
    typeDefs: [
        require('./typedefs/task'),
        require('./typedefs/user')
    ],
    resolvers: merge(
        require('./resolvers/task'),
        require('./resolvers/user')
    )
})

module.exports = new ApolloServer({
    schema,
    context: async ({ req }) => {
        // Authorization: Bearer <token>
        const authHeaders = req.headers.authorization;
        if (!authHeaders) {
            return {user: null};
        }
        const token = authHeaders.split('Bearer ')[1];
        const verify = promisify(jwt.verify);
        const payload = await verify(token, 'nerdeez');
        const user = await User.findByPk(payload.userId);
        return { user };
    }
})