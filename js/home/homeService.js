var app = angular.module('SethsApp');

app.service('homeService', function($http, $q, projectsService, resumeService){
	var data = ['Item 1', "Item 2", "Item 3"];
	this.getData = function(){
		return data;
	}
})