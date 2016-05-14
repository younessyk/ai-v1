var app = angular.module('CARLINE', ['ngRoute']);

var speech = new rsSpeech();
var eliza = new ElizaBot();

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