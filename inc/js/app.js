
// app.js

// base module
var base = angular.module('NGBase', ['ngRoute']);





// config routeProvider
base.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	// HOME
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/home', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})

	// TYPOGRAPHY
	.when('/typography', {
		templateUrl: 'pages/typography.html',
		controller: 'typographyController'
	})
	.when('/type-modular', {
		templateUrl: 'pages/type-modular.html',
		controller: 'typographyController'
	})
	.when('/type-contrast', {
		templateUrl: 'pages/type-contrast.html',
		controller: 'typographyController'
	})

	// CSS GRIDS
	.when('/gridinator', {
		templateUrl: 'pages/gridinator.html',
		controller: 'gridinatorController'
	})
	.when('/grid-samples', {
		templateUrl: 'pages/grid-samples.html',
		controller: 'gridSamplesController'
	})

	// SASS COLORS
	.when('/colors', {
		templateUrl: 'pages/colors.html',
		controller: 'colorsController'
	})

	// BUTTONS
	.when('/buttons', {
		templateUrl: 'pages/buttons.html',
		controller: 'buttonsController'
	})

	// FORMS
	.when('/forms', {
		templateUrl: 'pages/forms.html',
		controller: 'formsController'
	})

	// TABLES
	.when('/tables', {
		templateUrl: 'pages/tables.html',
		controller: 'tablesController'
	});

	// HTML5 fix
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: true
	});

}]);





// home controller
base.controller('homeController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'ngBase.';
	$log.log($scope.name);

}]);





// css grid controller
base.controller('gridinatorController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Gridinator';
	$log.log($scope.name);

}]);





// grid samples controller
base.controller('gridSamplesController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Gridinator: samples';
	$log.log($scope.name);

}]);





// typography controller
base.controller('typographyController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Typography';
	$log.log($scope.name);

}]);





// color me sass controller
base.controller('colorsController', ['$scope', '$log', '$http', function($scope, $log, $http) {

	$scope.name = 'Colors';

	// get colors
	$http({
		method: 'GET',
		url: 'http://localhost:8888/_GIT/ngBase/inc/gridinator/vendors/colors/colors.json'
	}).then(function successCallback(response) {
		$scope.status = response.status;
		$scope.colors = response.data;
		$log.log($scope.colors);
	}, function errorCallback(response) {
		$log.log($scope.colors);
	});

}]);





// buttons controller
base.controller('buttonsController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Buttons';
	$log.log($scope.name);

}]);






// forms controller
base.controller('formsController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Forms';
	$log.log($scope.name);

}]);





// tables controller
base.controller('tablesController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Tables';
	$log.log($scope.name);

}]);