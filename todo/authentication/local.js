var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

passport.use(new LocalStrategy(
    async function(username, password, done) {
        const users = await User.findAll({
            where: {
                email: username,
                password : password
            }
        })
        if (users.length === 1) {
            const user = users[0];
            done(null, user);
        } else {
            done(null, false);
        }
    }
))