angular.module('aa.homepage')

.directive('messageChanger', function() {
  'use strict';

  return {
    restrict: 'EA',
    templateUrl: 'app/homepage/directives/messageChanger/messageChanger.html',

    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.changeMessage = function() {
        this.message = this.changeTo;
      };
    },

    scope: {
      message: '=',
      changeTo: '@'
    }
  };
});
