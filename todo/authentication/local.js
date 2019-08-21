var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const { User, Task } = require('../models');
// const User = require('../models').User;
// const Task = require('../models').Task;

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