var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
require('./authentication/local');
require('./authentication/jwt');
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // req.cookie
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());


// req.session = {}
// req.session.userId = 100;
app.use(session({
  secret: 'keyboard cat',
  // store: 
}));

app.use(passport.session());

// <a href="bank.com/transfer/....>"

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/tasks', 
  passport.authenticate('jwt', {session: false}), 
  
  tasksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// postgres://username:password@some.db.address:5432/todo
// sqlite:////Users/yarivkatz/Development/workspace/lectures/node/cp-node/todo/db.sqlite