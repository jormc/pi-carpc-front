'use strict';

/**
 * @ngdoc function
 * @name piCarpcFrontApp.controller:ClockCtrl
 * @description
 * # ClockCtrl
 * Controller of the piCarpcFrontApp
 */
angular.module('piCarpcFrontApp')
  .controller('ClockCtrl', function($scope, $interval) {
	  var tick = function() {
	    $scope.clock = Date.now();
	  }
	  tick();
	  $interval(tick, 1000);
  });
