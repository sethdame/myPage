var app = angular.module('sounder');

app.controller('soundCtrl', function($scope, $sce, soundService){
	
	$scope.getUser = function(){
		soundService.getUser($scope.searchText).then(function(data){
			$scope.userData = data
		});

	};

		$scope.play = function(track_url){
			SC.oEmbed(track_url, { auto_return: true }, function(oEmbed) {
      		$scope.$apply(function(){
      			$scope.player_html = $sce.trustAsHtml(oEmbed.html)
      		});
    	});
	};
})


