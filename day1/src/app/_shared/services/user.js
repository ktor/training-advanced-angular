angular.module('aa.shared')

.provider('user', function() {
  'use strict';

  this.preferredLanguage = 'en';
  var sessionLength;

  var User = function(preferredLanguage, sessionLength) {
    this.preferredLanguage = 'en';
    this.sessionLength = sessionLength;
  };


  this.setSessionLength = function(len) {
    sessionLength = len;
  };


  this.$get = function() {
    return new User(this.preferredLanguage, sessionLength);
  };
});
