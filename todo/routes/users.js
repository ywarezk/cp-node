var express = require('express');
var router = express.Router();
const User = require('../models').User;

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

module.exports = router;
