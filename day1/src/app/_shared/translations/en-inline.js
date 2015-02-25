angular.module('aa.shared')

.config(function($translateProvider) {
  'use strict';

  $translateProvider
    .translations('en', {
      'email_address': 'Email address',
      'password': 'Password',
      'password_repeat': 'Password repeat',
      'your_password_contains': 'Your password contains',
      'submit': 'Submit',
      'characters_counter': '{charactersCount, plural, one{character} other{characters}}'
    });
});
