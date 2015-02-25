angular.module('aa.shared')

.config(function($translateProvider) {
  'use strict';

  $translateProvider
    .translations('en', {
      'email_address': 'Email address',
      'password': 'Password',
      'password_repeat': 'Password repeat',
      'submit': 'Submit',
      'new_messages_counter': '{messagesCount, plural, one{new message} other{new messages}}',
    });
});
