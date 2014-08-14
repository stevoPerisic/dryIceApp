var express = require('express');
var nano = require('nano')('https://stevoperisic:*luerabbit24@stevoperisic.cloudant.com/');

(function(){
	var app = express.createServer( express.logger(), express.bodyParser(), express.favicon() );
	var responseObj = { success: true, data: [], error: false, message: 'Sample message test.' };
	var cloudantHelpers = require('./cloudantHelpers.js');
	
})();


try{
	var express = require('express');
	var nano = require('nano')('https://stevoperisic:*luerabbit24@stevoperisic.cloudant.com/');

	var app = express.createServer( express.logger(), express.bodyParser(), express.favicon() );

	// DB name will be username_MD5hexpassword
	// within the DB we will have documents distinguished by "type"
	// it could be "user", "site" or "order"
	// on successfull user login we can call the root route and check if we have a valid DB
	// if we do not we create a new DB and issue a key/pass (maybe)
	// - so that means we need to supply that in our GET call to the root
	// if we do have the DB we can than proceed to load the data

	// var dbNames = { users: 'dryice_users', sites: 'dryice_sites', orders: 'dryice_orders' };

	var responseObj = { success: true, data: [], error: false, message: 'Sample message test.' };

	var cloudantHelpers = require('./cloudantHelpers.js');

	// used for various settings could be usefull
	app.set("title", "Dry Ice Backend");

	// THIS IS WHAT WE NEED TO BE ABLE TO ACCEPT
	// REST - CRUD
	// var methodMap = { 'create' : 'POST', 'read' : 'GET', 'update' : 'PUT', 'delete' : 'DELETE' };
	// 
	// we have a users, sites and orders routes so, 3 * 4 = 12 total routes

	// test root
	app.get('/', function(req, res){
		res.send('welcome go dry ice API');
	});

	app.get('/:UDID', function(req, res){
		
		// go check if we have a DB with the device UDID in the name

		//**********************************************************
		// ERRORS WHEN RE-REQUESTING THE ROOT, WHY?
		// **********************************************************


		var dbName = req.params.UDID; // test-value dryice_1234_grtvs546_yegdvh5353
		var db = nano.use(dbName);
		db.get(dbName, function(err, body) {
			if (!err) {
				//console.log(body);
				res.send('Welcome to Dry Ice app!\nTesting Cloudant connections.\nUDID: '+req.params.UDID);
			}else{
				// res.send(JSON.stringify(err));
				nano.db.create(dbName, function(err, body) {
					if (!err) {
						console.log('database '+dbName+' created!');
						res.send(JSON.stringify(body));
					}else{
						console.log('database '+dbName+' failed!');
						res.send(JSON.stringify(err));
					}
				});
			}
		});
	});

	// POST
		app.post('/user/:id', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.post('/sites', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.post('/orders', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

	// GET
		app.get('/user/:id', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.get('/sites', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.get('/orders', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });

			alice.view('characters', 'crazy_ones', function(err, body) {
			  if (!err) {
			    body.rows.forEach(function(doc) {
			      console.log(doc.value);
			    });
			  }
			});
		});

	// PUT
		app.put('/user/:id', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.put('/sites', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.put('/orders', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

	// DELETE
		app.delete('/user/:id', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.delete('/sites', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});

		app.delete('/orders', function(req, res){
			res.send({ params: { _id: req.params.id, body: req.body, method: req.method, route: req.route } });
		});
	
	var port = process.env.PORT || 5000;
	app.listen(port, function() {
		console.log("Listening on " + port);
	});
}catch(error){
	console.log("error", error);
}

