angular.module('aa.shared')

.directive('autosize', function() {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',

    link: function(scope, el, attrs, ctrl) {
      var evt = document.createEvent('Event');

      evt.initEvent('autosize.update', true, false);
      autosize(el);

      if (ctrl) {
        scope.$watch(attrs.ngModel, function(newM) {
          el[0].dispatchEvent(evt);
        });
      }

    }
  };
});
