# Buenos Https!

Wrap your application in https using embedded self-signed certificates. Not so much for security, but primarily
for easily setting up (local) https servers during development.

## Installing

```bash
$ npm install --save-dev buenos-https
```

## Example

```javascript
var $buenosHttps = require('buenos-https');

// construct an express app for demonstration purposes
var $express = require('express');
var app = $express();
app.use($express.static('.'));

// wrap app in https
$buenosHttps(app)
    .listen(8000, function () {
        console.log('Express app now listening on https://localhost:8000');
    }
    
```

## API

### `buenosHttps(app, [options])`

Returns an [https.Server](https://nodejs.org/api/https.html#https_class_https_server)
(which is a subclass of [tls.Server](https://nodejs.org/api/tls.html#tls_class_tls_server)) instance.

```
var $buenosHttps = require('buenos-https');

$buenosHttps(app);

// or
$buenosHttps(app, options);
```

`app` should be a `requestListener`; something that can be stuffed into 
[`https.createServer`](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener).

`options` is an optional `https` options object. See documentation of 
[`tls.createServer`](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener).
By default the options object contains the result of `buenosHttps.getDefaultOptions`, the very minimal to set up
 a secure server.

### `buenosHttps.getDefaultOptions()`

Returns the default options object, includes the embedded certificates.

```javascript
{
    key: 'some server key',
    cert: 'some server cert'
}
```
