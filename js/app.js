var app = angular.module('CARLINE', ['ngRoute']);

var speech = new rsSpeech();
var carline = new CarlineBot();

app.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		controller: 'homeCtrl',
	})

	.when('/smth', {
		controller: 'smthCtrl',
	})

	.otherwise({
		redirectTo: '/'
	});

});
