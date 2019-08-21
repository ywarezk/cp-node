var express = require('express');
var router = express.Router();
const User = require('../models').User;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.route('/')
  .get(function(req, res, next) {
    res.send('respond with a resource');
  })
  .post(async function(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch(err) {
      res.status(400).json({
        error: err.message
      })
    }
    
  })

router.post('/login', passport.authenticate('local', {
  session: false
}), function(req, res) {
  jwt.sign({userId: req.user.id}, 'nerdeez', function(err, token) {
    res.send(token);
  });
});


module.exports = router;
