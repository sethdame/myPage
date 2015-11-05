var resumeApp = angular.module('resumeApp', ['ngRoute']);

    resumeApp.config(function($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'resumeCtrl'
            })
            .when('/experience', {
                templateUrl : 'pages/experience.html',
                controller  : 'experienceCtrl'
            })

            .when('/education', {
                templateUrl : 'pages/education.html',
                controller  : 'educationCtrl'
            });
        // $locationProvider.html5Mode(true);
    });
