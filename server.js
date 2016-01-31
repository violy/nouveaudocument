'use strict';

var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();

app.use(express.static('public'));
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use('/bower_components',express.static('bower_components'));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);