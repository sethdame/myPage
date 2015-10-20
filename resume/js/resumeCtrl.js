var resumeApp = angular.module('resumeApp');

resumeApp.controller('resumeCtrl', function($scope) {
    $scope.message = 'Still making it look pretty but the binding works!';
});

resumeApp.controller('experienceCtrl', function($scope) {
    $scope.message = 'More design and color shortly';
});

resumeApp.controller('educationCtrl', function($scope) {
    $scope.message = 'binding ----> waiting.';
});