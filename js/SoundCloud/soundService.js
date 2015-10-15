var app = angular.module('sounder');

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