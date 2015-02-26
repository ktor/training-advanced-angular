angular.module('aa.shared')

.filter('mydate', function($filter) {
  'use strict';

  var dateFilter = $filter('date');

  return function(input, format) {
    var dateObj = new Date(input);

    return dateFilter(dateObj, format);
  };
});
