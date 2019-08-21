/**
 * resolver implementation of our gql user typedefs
 */

 const { User } = require('../../models');
 const jwt = require('jsonwebtoken');
 const { promisify } = require('util');
 const { AuthenticationError } = require('apollo-server-express');

 module.exports = {
    User: {
        jwtToken: async (parent) => {
            const sign = promisify(jwt.sign);
            const token = await sign({userId: parent.id}, 'nerdeez');            
            return token;
        }
    },

     Query: {
         getAllUsers: () => {
            return User.findAll();
         }
     },

     Mutation: {
         register: (parent, args) => {
             return User.create(args);
         },
         login: async (parent, args) => {
            const user = await User.findOne({
                where: {
                    email: args.email,
                    password: args.password
                }
            });
            if (!user) {
                throw new AuthenticationError('invalid credentials')
            }
            return user;
         }
     }
 }