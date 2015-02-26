angular.module('aa.shared')

.service('auth', function($localStorage, jwtHelper, api, user) {
  'use strict';

  this.isAutheticated = function() {
    return ($localStorage.user) ?
      (($localStorage.user.jwtToken) ? true : false)
      : false;
  };

  this.login = function(username, password) {
    return api.auth.login({username: username, password: password})
      .then(function(res) {
        var payload = jwtHelper.decodeToken(res.jwtToken);
        var userData = {
          jwtToken: res.jwtToken,
          uuid: payload.uuid,
          username: payload.username
        };

        $localStorage.user = userData;
        user.setData(userData);
      });
  };
})


.factory('AuthCheckFactory', function($q, $state, auth) {
  'use strict';

  var dfd = $q.defer();

  dfd.promise.catch(function(reason) {
    $state.go('auth.login');
  });

  if (auth.isAutheticated()) {
    dfd.resolve();
  } else {
    dfd.reject();
  }

  return dfd.promise;
});
