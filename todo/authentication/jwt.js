var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('../models');

// Request
// Authorization: Bearer <token>
passport.use(new JwtStrategy(
    {
        secretOrKey: 'nerdeez',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(jwt_payload, done) {
        const {userId} = jwt_payload;
        try {
            const user = await User.findByPk(userId);
            done(null, user);
        } catch(err) {
            done(err);
        }
        
    }
));