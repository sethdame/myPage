var app = angular.module('SethsApp');

app.controller('homeCtrl', function($scope, homeService){
	$scope.data = homeService.getData();
})