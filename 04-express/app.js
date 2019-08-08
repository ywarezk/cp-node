/**
 * express server
 * for every request sends hello world as a response
 */

const express = require('express');

const app = express();

app.on('error', function(err) {

})

// /about/foo/bar

// /about

function helloWorldMiddleware(message) {
    return function(req, res, next) {
        req.message = message;
        next();
    }
}

app.use(helloWorldMiddleware('hello from other middleware'))

app.use('/images', express.static('images'))


app.get('*', function(req, res, next) {
    res.send(req.message);
});

// app.post('/about', function(req, res) {
//     res.send('about page');
// })

 app.listen(3000, function() {
    console.log('im now listening on port 3000');
 });

 