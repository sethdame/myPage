var app = angular.module('SethsApp');

app.controller('MainController', function($scope){
	$scope.data = DataService.getData();
})