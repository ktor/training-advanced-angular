angular.module('aa.homepage')

.factory('Vehicle', function() {
  'use strict';

  var Vehicle = function(name) {
    this.name = name;
  };

  Vehicle.prototype.drive = function() {
    console.log(this.name, 'is driving');
  };

  return Vehicle;
})


.factory('Bike', function(Vehicle) {
  'use strict';

  var Bike = function() {
    Vehicle.call(this, 'bike');
  };

  Bike.prototype = Object.create(Vehicle.prototype);

  return Bike;
});
