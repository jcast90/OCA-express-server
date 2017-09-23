// import files and packages up here
const data = require('./data');
var express = require('express');
var morgan = require('morgan');
var path = require('path');

// create your express server below

var app = express();
app.use(express.static(path.resolve(__dirname, '../../startnow-web101-san-diego-top-spots/')));

// add your routes and middleware below
app.use(morgan('combined'))
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../../startnow-web101-san-diego-top-spots/index.html'));
})
app.get('/data', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../../startnow-web101-san-diego-top-spots/data.json'));
})

// finally export the express application
module.exports = app;