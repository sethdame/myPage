var app = angular.module('SethsApp', ['ngSeth']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
   $routeProvider
	  .when('/home', {
	    templateUrl: '/homeTmpl.html',
	    controller: 'homeCtrl.js'
	  })
	  .when('/projects', {
	    templateUrl: '/projectsTmpl.html',
	    controller: 'projectsCtrl.js'
	  })
	  .when('/resume', {
	  	templateUrl: 'resumeTmpl.html',
	  	controller: 'resumeCtrl.js'
	  })
	  .otherwise({
	    redirectTo: '/home'
	  })
});