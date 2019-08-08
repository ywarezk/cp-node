

// function helloWorld() {
//     console.log('hello world');
// }

// module.exports === {}

// module => {
       //exports: {} 
// }

module.exports = helloWorld;
// exports.hello = helloWorld; //correct
// module.exports === exports // true
// exports = helloWorld; // incorrect
// module.exports === exports // false

function helloWorld() {
    console.log('hello world');
}

// exports = helloWorld; // Erro we just lost our exports pointer