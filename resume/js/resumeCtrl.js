var resumeApp = angular.module('resumeApp');

resumeApp.controller('resumeCtrl', function($scope) {
    $scope.message = 'Still working filling in all the info but the binding works!';
});

resumeApp.controller('experienceCtrl', function($scope) {
    $scope.message = 'Will also put more design and color shortly';
});

resumeApp.controller('educationCtrl', function($scope) {
    $scope.message = 'binding ----> waiting.';
});