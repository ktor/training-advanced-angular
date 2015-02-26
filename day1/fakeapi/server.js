/* jshint node: true */
'use strict';

var bodyParser   = require('body-parser');
var cors = require('cors');
var errorhandler = require('errorhandler');
var express = require('express');
var expressJwt = require('express-jwt');
var logger = require('morgan');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(logger('[:status] :method :url (:response-time ms)'));
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

app.get('/', function(req, res) {
  res.send('Hello world!');
});

var router = express.Router();
// router.use(expressJwt({secret: 'secret'}).unless({path: [
//   '/fakeapi/auth/login',
//   '/fakeapi/auth/register',
// ]}));
require(__dirname + '/controllers/auth')(router);
require(__dirname + '/controllers/posts')(router);
app.use('/fakeapi', router);


app.listen(3000, function() {
  console.log('Server started at', 'localhost', 3000);
});
