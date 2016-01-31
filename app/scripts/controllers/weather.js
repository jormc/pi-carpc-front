'use strict';

/**
 * @ngdoc function
 * @name piCarpcFrontApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the piCarpcFrontApp
 */
angular.module('piCarpcFrontApp')
	.controller('WeatherCtrl', function($scope, $http, $locale, $log) {
		// Set default values for our form fields.
		$scope.units = 'metric'; 
		$scope.apiKey = 'a5f21234a8d7a2310daf37b88510b186';
		$scope.city = 'Cornella de Llobregat';
		
		var url = 'http://api.openweathermap.org/data/2.5/weather';
		$http.jsonp(url, { params : {
			q : $scope.city,
			units : $scope.units,
			appid : $scope.apiKey,
			callback: 'JSON_CALLBACK'
		}}).
		success(function(data, status, headers, config) {
			$scope.main = data.main;
			$scope.wind = data.wind;
			$scope.description = data.weather[0].description;
			
			console.log(data);
		}).
		error(function(data, status, headers, config) {
			// Log an error in the browser's console.
			$log.error('Could not retrieve data from ' + url);
		});
  });
