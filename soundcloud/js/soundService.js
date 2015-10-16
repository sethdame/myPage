var app = angular.module('sounder');

app.service('soundService', function($http){
  var CLIENT_id = 'bda4ada8694db06efcac9cf97b872b3e';
  var HOST = 'http://api.soundcloud.com/';
  this.getUser = function(username){
    return $http.get(HOST + 'users/' + username + '/tracks.json?client_id=' + CLIENT_id).then(function(resp){
      return resp.data;
    });
    
    };
  });