var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home2.html'
	})
	.when('/about', {
		templateUrl: 'partials/about.html'
	})
	.when('/services', {
		templateUrl: 'partials/services.html'
	})
	.when('/booking', {
		templateUrl: 'partials/booking.html'
	})
	.when('/home2', {
		templateUrl: 'partials/home.html'
	})

})