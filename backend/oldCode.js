// routes
	// Users CRUD
	// Get User
	app.get('/users/', function(req, res){
		retrieve_doc(dbNames.users, req.body, res);
		// IMPORTANT POINT BELOW !!!
		// WHY WE PASS THE res OBJ. into our retrieve_doc fn - 
		//
		// res.send(responseObj); 
		//
		// this commented out here bcs. was returning a response before the db comm was finished
		// in order to be truly ASYNC we pass the res object to our retrieve_doc function and send the response from the server
		// once the returnObj has been populated with data from the DB :)
	});

	app.get('/users/:id', function(req, res){
		res.send({
			params: {
				_id: req.params.id,
				body: req.body
			}
		});
	});

	// Create User
	app.post('/users/', function(req, res){
		console.log(req.body);
		var responseObj = insert_doc(dbNames.users, req.body);
		res.send('Create user: '+JSON.stringify(responseObj));
	});

	// Update User
	app.post('/users/:id', function(req, res){
		res.send('trying to update user id: '+req.params.id);
	});

	// Delete User
	// probably won't be deleting users for now...

	// sites CRUD
	app.get('/site', function(req, res){
		retrieve_doc(dbNames.sites, req.body, res);
	});

	app.get('/site/:id', function(req, res){
		res.send('Trying to retrieve from DB site id: '+req.params.id);
	});

	app.post('/site', function(req, res){
		console.log(req.body);
		var responseObj = insert_doc(dbNames.sites, req.body);
		res.send('Create a site: '+JSON.stringify(responseObj));
	});

	app.post('/site/:id', function(req, res){
		res.send('Updating site id: '+req.params.id);
	});

	// orders CRUD
	app.get('/orders', function(req, res){
		retrieve_doc(dbNames.orders, req.body, res);
	});

	app.post('/order', function(req, res){
		console.log(req.body);
		var responseObj = insert_doc(dbNames.orders, req.body);
		// once sucessfuly created we need to email it
		res.send('Create an order: '+JSON.stringify(responseObj));
	});
	// Update Order
	// this for later
	// Delete Order
	// this for later
	// Get Order History
	// this for later as well


	// app.post('/sendEmail', function(req, res){
	// console.log(req.route);
	// console.log(req.body);
	// var stringifiedBody = JSON.stringify(req.body);
	// res.send('I want to send an email. This is what you gave me: '+stringifiedBody);
	// });
