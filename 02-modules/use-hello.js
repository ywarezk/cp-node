
// (function(module, exports, require, __filename, __dirname) {
    // exports === module.exports => {}

    const express = require('express');

    const helloWorld = require('./hello');
    helloWorld();

    // var, const, let
    // scope of the variable
    // number of assignments

// })();

// var is functional scope

function hello() {
    if (true) {
        var message = 'hello'
    }
}

var message = 'where am i born?';

// setTimeout(function() {

// }, 1000); 










