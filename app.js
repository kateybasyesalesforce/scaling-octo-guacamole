var express = require('express');
var app = express();
var path = require('path');

// Set local dev
var port = process.env.PORT || 3000;
    app.listen(port);

// Set database
var mongo = require('mongodb').MongoClient;
var mongoUri = process.env.MONGO_URI ||
  'mongodb://127.0.0.1:27017/l4d';

// Set template engine
		app.engine('pug', require('pug').__express);
		app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'bower_components')));

// Routes
var title = "Setup Proto";
app.get('/', function (req, res) {
  res.render('index', {
  	title: title
  });
});

app.get('/proto', function (req, res) {
  res.render('proto', {
  	title: title,
  	fs: require('fs')
  });
});

// app.get('/bars/:letter', function (req, res) {
// 	var letter = req.param('letter');
// 	mongo.connect(mongoUri, function(err, db) {
// 	  if (err) {
// 	    throw err;
// 	  }

// 	  db.collection('bars').find({letter: letter}).sort({city: 1}).toArray(function(err, result) {
// 	    if (err) {
// 	    	console.log("There has been an error")
// 	    	res.send(err);
// 	      throw err;
// 	    }
// 	    res.render('bars', {
// 	    	letter: letter,
// 	    	bars: result,
// 	    	title: title + " // " + letter + " Bars"
// 	    })
// 	  });
// 	});
// });