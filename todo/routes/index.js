var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'where-my-html.html'));
})

module.exports = router;
