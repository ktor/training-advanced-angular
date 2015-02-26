/* jshint node: true */
'use strict';

var jwt = require('jsonwebtoken');
var _ = require('lodash');

var users = [
  { uuid: '910835b0-bd82-11e4-bb52-0800200c9a66',
    username: 'admin',
    password: 'admin'}
];


var login = function(req, res) {
  var user = _.find(users, function(user) {
    return user.username === req.body.username;
  });

  if (!user) {
    return res.status(401).end('User not found');
  }
  if (req.body.password !== user.password) {
    return res.status(401).end('Incorrect password');
  }

  var token = jwt.sign({
    uuid: user.uuid,
    username: user.username,
  }, 'secret');
  res.send({jwtToken: token});
};


exports = module.exports = function(apiRouter) {
  apiRouter.post('/auth/login', login);
};
