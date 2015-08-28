'use strict';

var $fs = require('fs');
var $https = require('https');

module.exports = buenosHttps;
module.exports.getDefaultOptions = getDefaultOptions;

function buenosHttps (app, options) {

    options = options || getDefaultOptions();

    return $https.createServer(options, app);

}

function getDefaultOptions () {

    return {
        key: $fs.readFileSync(__dirname + '/certs/server.key'),
        cert: $fs.readFileSync(__dirname + '/certs/server.crt')
    };

}
