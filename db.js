'use strict'
const faker = require('faker');

var type = 'success';
// var type = 'failed';

var task = require('./mock/' + type + '/task.js'); 

module.exports = function() {
    let data = { };
    Object.assign(data, task);
    return data;
}