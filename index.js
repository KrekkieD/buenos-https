'use strict';

var $fs = require('fs');
var $https = require('https');

module.exports = buenosHttps;

function buenosHttps (app) {

    var options = {
        key: $fs.readFileSync(__dirname + '/certs/server.key'),
        cert: $fs.readFileSync(__dirname + '/certs/server.crt')
    };

    return $https.createServer(options, app);

}
