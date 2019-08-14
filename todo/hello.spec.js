const assert = require('assert');
const app = require('./app');


describe('hello world', function() {
    let server;

    /**
     * make our server listen to requests
     */
    before(function(done) {
        server = app.listen(3000, function() {
            console.log('the server is now listening on port 3000');
            done();
        });
    });

    // before();

    it('expect hello to equal hello', function() {
        console.log('my first test');
        assert.strictEqual('hello', 'hello');
    });

    /**
     * close our server
     */
    after(function() {
        server.close();
    });


});