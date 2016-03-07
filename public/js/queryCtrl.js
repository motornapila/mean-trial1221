var queryCtrl = angular.module('queryCtrl', ['geolocation', 'gservice']);

queryCtrl.controller('queryCtrl', function($scope, $log, $http, $rootScope, geolocation, gservice){

	//Init vars
	$scope.formData = {};
	var queryBody = {};

	//Functions

	//Get User's actual coordinates based on HTML5 at window load
	geolocation.getLocation().then(function(data){
		coords = {lat:data.coords.latitude, long:data.coords.longitude};

		//set lat and long equal to HTML5 coords
		$scope.formData.longitude = parseFloat(coords.long).toFixed(3);
		$scope.formData.latitude = parseFloat(coords.lat).toFixed(3);
	});

	//Get coordinates based on mouse click

});