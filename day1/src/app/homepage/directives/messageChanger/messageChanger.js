angular.module('aa.homepage')

.directive('messageChanger', function() {
  'use strict';

  return {
    restrict: 'EA',
    templateUrl: 'app/homepage/directives/messageChanger/messageChanger.html',

    controllerAs: 'ctrl',
    controller: function($scope) {
      this.changeMessage = function() {
      };
    },

    scope: {
      message: '=',
      changeTo: '@'
    }
  };
});
