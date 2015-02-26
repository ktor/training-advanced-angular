angular.module('aa.homepage')

.directive('numberParser', function() {
  'use strict';

  return {
    restrict: 'A',
    require: 'ngModel',

    link: function(scope, el, attrs, ctrl) {
      ctrl.$parsers.unshift(function(value) {
        ctrl.$setValidity('numberParser', typeof value === 'number');

        return value;
      });
    }
  };
})


.directive('numberFormater', function() {
  'use strict';

  return {
    restrict: 'A',
    require: 'ngModel',

    link: function(scope, el, attrs, ctrl) {
      ctrl.$formatters.unshift(function(value) {
        value = value || '';

        return value.split('').reverse().join('');
      });
    }
  };
});
