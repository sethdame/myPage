var app = angular.module('sounder');

app.controller('soundCtrl', function($scope, soundService){
  
  $scope.getUser = function(){
    soundService.getUser($scope.searchText).then(function(data){
      $scope.userData = data.data;
    });

  };

    $scope.play = function(track_url){
      SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
          $scope.$apply(function(){
            $scope.player_html = $sce.trustAsHtml(oEmbed.html)
          });
      });
    };

    var parseData = function(searchInfo){
      $scope.theData = [];
      for(var i = 0; i < searchInfo.length; i++){
        var correctData = {};
        searchInfo[i].previewUrl && (correctData[''] = searchInfo[i].previewUrl);
        searchInfo[i].typeName && (correctData[''] = searchInfo[i].trackName);
        searchInfo[i].productName && (correctData[''] = searchInfo[i].artistName);
        searchInfo[i].collectionName && (correctData[''] = searchInfo[i].collectionName);
        searchInfo[i].artworkUrl60 && (correctData[''] = searchInfo[i].artworkUrl100);
        searchInfo[i].kind && (correctData['Type'] = searchInfo[i].kind);
        searchInfo[i].trackPrice && (correctData['IndividualPrice'] = searchInfo[i].trackPrice);
        searchInfo[i].collectionPrice && (correctData['CollectionPrice'] = searchInfo[i].collectionPrice);
        $scope.theData.push(correctData);
      };
   };
});


