const EventEmitter = require('events');

class TimerEmitter extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('hello', 'hello from event');
        }, 1000);
    }

    birthday() {
        this.emit('error', new Error('i do not have a birthday'));
    }
}

const myTimer = new TimerEmitter();

myTimer.on('hello', function(message) {
    console.log(message);
});

myTimer.on('error', function(err) {

});

myTimer.birthday();

try {
    throw new Error();
}
catch(err) {

}




//const a = {birthday: myTimer.birthday};
//a.birthday();


