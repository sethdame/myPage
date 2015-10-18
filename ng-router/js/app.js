var resumeApp = angular.module('resumeApp', ['ngRoute']);

    // configure our routes
    resumeApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/experience', {
                templateUrl : 'pages/experience.html',
                controller  : 'experienceCtrl'
            })

            // route for the contact page
            .when('/education', {
                templateUrl : 'pages/education.html',
                controller  : 'educationCtrl'
            });

            // $locationProvider.html5Mode(true);
    });
