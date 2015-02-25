angular.module('aa.shared')

.directive('equals', function() {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, el, attrs, ngModel) {
      var validate;
      if (!ngModel) {
        return;
      }
      validate = function() {
        var rawEl, val1, val2;
        val1 = ngModel.$viewValue;
        val2 = attrs.equals;
        rawEl = el[0];
        rawEl.setCustomValidity('');
        if ((val1 != null ? val1.length : void 0) || (val2 != null ? val2.length : void 0)) {
          ngModel.$setValidity('equals', val1 === val2);
          if (val1 !== val2) {
            return rawEl.setCustomValidity('Passwords don\'t match');
          }
        }
      };
      scope.$watch(attrs.ngModel, validate);
      return attrs.$observe('equals', validate);
    }
  };
});
