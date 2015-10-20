var resumeApp = angular.module('resumeApp');

resumeApp.controller('resumeCtrl', function($scope) {
    $scope.message = 'What is most important at the moment';
});

resumeApp.controller('experienceCtrl', function($scope) {
    $scope.message = 'Wanting this to be filled tech XP!';
});

resumeApp.controller('educationCtrl', function($scope) {
    $scope.message = 'binding ----> waiting.';
});