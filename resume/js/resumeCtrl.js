var resumeApp = angular.module('resumeApp');

resumeApp.controller('resumeCtrl', function($scope) {
    $scope.message = 'Still filling in all the info but the binding works!';
});

resumeApp.controller('experienceCtrl', function($scope) {
    $scope.message = 'More design and color shortly';
});

resumeApp.controller('educationCtrl', function($scope) {
    $scope.message = 'binding ----> waiting.';
});