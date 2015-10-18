 var resumeApp = angular.module('resumeApp');

    // create the controller and inject Angular's $scope
    resumeApp.controller('mainCtrl', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    resumeApp.controller('experienceCtrl', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    resumeApp.controller('educationCtrl', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });