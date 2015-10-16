var app = angular.module('sounder', []);

app.controller('soundCtrl', function($scope, soundService){
	
	$scope.getUser = function(){
		soundService.getUser($scope.searchText).then(function(data){
			$scope.userData = data
		});

	}

		$scope.play = function(product_url){
			SC.oEmbed(product_url, { auto_return: true }, function(oEmbed) {
      		$scope.$apply(function(){
      			$scope.player_html = $sce.trustAsHtml(oEmbed.html)
      		});
    	});
	  }

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
      }
	 }
})

app.service('soundService', function($http){
  var CLIENT_id = 'bda4ada8694db06efcac9cf97b872b3e';
  var HOST = 'http://api.soundcloud.com/';
  this.getUser = function(username){
    return $http.get(HOST + 'users/' + username + '/tracks.json?client_id=' + CLIENT_id).then(function(resp){
      return resp.data;
    })
    
  }

  var router = express.Router();

router.get('/', function(req, res) {
    res.json(quotes);
});

router.get('/product/random', function(req, res) {
    var id = Math.floor(Math.random() * products.length);
    var q = products[id];
    res.json(q)
});

router.get('/product/:id', function(req, res) {
    if(products.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }
    var q = products[req.params.id];
    res.json(q);
});

router.post('/product', function(req, res) {
    if(!req.body.hasOwnProperty('author') ||
        !req.body.hasOwnProperty('text')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }

    var newProd = {
        author : req.body.author,
        text : req.body.text
    };

    quotes.push(newQuote);

    res.json(true);
});

router.delete('/product/:id', function(req, res) {
    if(quotes.length <= req.params.id) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }

    quotes.splice(req.params.id, 1);
    res.json(true);
});
  
})
