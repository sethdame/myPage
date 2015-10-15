var app = angular.module('SethsApp');

app.controller('projectsCtrl', function($scope, projectsService){
	$scope.data = projectsService.getData();
})