var app = angular.module('webClient', ['ngRoute'])

app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl : 'views/posts.html'
		})

		.when('/my',{
			templateUrl : 'views/my.html'
		})

		.otherwise({
			redirect: 'views/posts.html'
		})


})

app.controller('mainController', function($scope){
	$scope.sysMessage = 'This is a test message!'
})