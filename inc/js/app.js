
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

	// CSS GRIDS
	.when('/css-grids', {
		templateUrl: 'pages/css-grids.html',
		controller: 'cssGridController'
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
base.controller('cssGridController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'CSS Grid';
	$log.log($scope.name);

}]);





// grid samples controller
base.controller('gridSamplesController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Gridinator';
	$log.log($scope.name);

}]);





// typography controller
base.controller('typographyController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Typography';
	$log.log($scope.name);

}]);





// color me sass controller
base.controller('colorsController', ['$scope', '$log', function($scope, $log) {

	$scope.name = 'Colors';
	$log.log($scope.name);

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