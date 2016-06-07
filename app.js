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

// Routes

// Table of Contents
var title = "Setup Proto";
app.get('/', function (req, res) {
  res.render('index', {
    navEscape: navEscape,
  	title: title
  });
});

// Testing Navigation - Getting back from Setup to app
var navEscape = {
  close: {
      color: '#662198',
      icon: 'close',
      label: 'Close',
      appName: 'Service Desk'
  },
  back: {
      color: '#348FE1',
      icon: 'back',
      label: 'Back',
      appName: 'Sales Desk'
  },
  layerCake: {
    color: '#45C173',
    label: 'layerCake'
  }
}

app.get('/navEscape/:type', function (req, res) {
  var type = req.param('type');
  res.render('navEscape_start', {
  	title: title,
    nav_type: navEscape[type],
  	fs: require('fs')
  });
});


app.get('/navEscape/:type/setup', function (req, res) {
  var type = req.param('type');

  res.render('navEscape_setup', {
    title: title,
    nav_type: navEscape,
    type: type,
    fs: require('fs')
  });
});

app.use('/dist', express.static(path.join(__dirname + '/dist')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));


// app.use(express.static(path.join(__dirname, '/dist')));
// app.use(express.static(path.join(__dirname, '/bower_components')));


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