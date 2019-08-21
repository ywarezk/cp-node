var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const { gql, ApolloServer } = require('apollo-server-express'); 
const server = require('./graphql/server');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

let msg = 'hello graphql';

// gql('hello')
// gql`
//   hello
// `

// gql(['hello ', 'world ', 'foo bar '], msg, 1+1, Math.random())
// gql`
//   hello ${msg}
//   world ${ 1 + 1 }
//   foo bar ${ Math.random() }
// `


// const typeDefs = gql`
//   type Hello {
//     title: String!
//   }

//   type Query {
//     getHello: Hello
//   } 

//   type Mutation {
//     setHello(newHello: String!): Hello
//   }
// `

// const resolvers = {
//   Query: {
//     getHello: () => {
//       return {
//         title: msg
//       }
//     }
//   },
//   Mutation: {
//     setHello: (parent, args) => {
//       msg = args.newHello;
//       return {
//         title: msg
//       }
//     }
//   }
// }

// const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// query { hello }
//app.use('/graphql')

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
