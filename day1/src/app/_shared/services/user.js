angular.module('aa.shared')

.provider('user', function() {
  'use strict';

  this.preferredLanguage = 'en';
  var sessionLength;

  var User = function(preferredLanguage, sessionLength) {
    this.preferredLanguage = 'en';
    this.sessionLength = sessionLength;
  };

  User.prototype.setData = function(data) {
    var self = this;

    angular.forEach(data, function(val, prop) {
      self[prop] = val;
    });
  };

  User.prototype.init = function(userData) {
    this.setData(userData);
  };

  this.setSessionLength = function(len) {
    sessionLength = len;
  };


  this.$get = function() {
    return new User(this.preferredLanguage, sessionLength);
  };
});
