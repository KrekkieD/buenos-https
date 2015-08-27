'use strict';

var $buenosHttps = require('..');

var $express = require('express');

var app = $express();

app.use($express.static(__dirname + '/public'));

$buenosHttps(app).listen(8345, function () {

    console.log('server listening on https://localhost:8345');

});
