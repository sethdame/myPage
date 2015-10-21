var resumeApp = angular.module('resumeApp');

resumeApp.controller('resumeCtrl', function($scope) {
    $scope.message = 'Pertinent Experience';
});

resumeApp.controller('experienceCtrl', function($scope) {
    $scope.message = 'Wanting this to be filled with Tech XP!';
});

resumeApp.controller('educationCtrl', function($scope) {
    $scope.message = 'binding ----> working.';
});