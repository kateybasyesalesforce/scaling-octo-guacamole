var express = require('express');
var app = express();
		app.engine('pug', require('pug').__express);
		app.set('view engine', 'pug');
var path = require('path');
		app.use(express.static(path.join(__dirname, 'public')));
var mongo = require('mongodb').MongoClient;

var mongoUri = process.env.MONGO_URI ||
  'mongodb://127.0.0.1:27017/l4d';

var port = process.env.PORT || 3000;
    app.listen(port);

// Routes
var title = "Letters Are For Drinking";
app.get('/', function (req, res) {
	var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  res.render('index', {
  	title: title,
  	letters: letters,
  	currentLetterIndex: 7
  });
});

app.get('/bars/:letter', function (req, res) {
	var letter = req.param('letter');
	mongo.connect(mongoUri, function(err, db) {
	  if (err) {
	    throw err;
	  }

	  db.collection('bars').find({letter: letter}).sort({city: 1}).toArray(function(err, result) {
	    if (err) {
	    	console.log("There has been an error")
	    	res.send(err);
	      throw err;
	    }
	    res.render('bars', {
	    	letter: letter,
	    	bars: result,
	    	title: title + " // " + letter + " Bars"
	    })
	  });
	});
});