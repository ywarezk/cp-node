const assert = require('assert');
const app = require('./app');
const axios = require('axios');
const { Task, Tag } = require('./models'); 


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

    /**
     * delete all the elements in the database
     * load some initial data
     */
    beforeEach(function() {
        return Task.destroy({
            where: {

            }
        });
    });

    beforeEach(async function() {
        const tag = await Tag.create({title: 'hello'})
        const task = await Task.create({
            title: 'hello', description: 'world'
        });
        try {
            await task.addTag(tag);
        } catch(err) {
            debugger;
        }
        
        debugger;
    })

    // before();

    it('expect hello to equal hello', function() {
        console.log('my first test');
        assert.strictEqual('hello', 'hello');
    });

    it.only('get tasks expect length', async function() {
        const response = await axios
                                .get('http://localhost:3000/api/tasks/');
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.length, 1);
    });

    it('create new task', async function() {
        const response = await axios
                                .post('http://localhost:3000/api/tasks/', {
                                    title: 'foo',
                                    description: 'bar',
                                    // userId:  1
                                });
        assert.strictEqual(response.status, 201);
        // assert.strictEqual(response.data.userId, 1);
        assert.strictEqual(response.data.title, 'foo');
    });

    /**
     * close our server
     */
    after(function() {
        server.close();
    });


});