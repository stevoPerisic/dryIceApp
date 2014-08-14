// CLOUDANT DB HELPERS

function insert_doc(_dbName, _params){
	console.log('Insert doc Db: '+JSON.stringify(_dbName));
	console.log('Insert doc params: '+JSON.stringify(_params));

	var db = nano.use(_dbName);

	db.insert(_params, function(error, body){
		if(error){
			console.log(error);
			if(error.status_code === 404){
				nano.db.create(_dbName, function(error){
					if(error){
						console.log(error);
						responseObj.success = false;
						responseObj.error = error.error;
						responseObj.message = error.reason;
						return responseObj;
					}else{
						insert_doc(_dbName, _params);
					}
				});
			}
		}else{
			console.log(body);
			responseObj.data = {
				createdDoc_id: body.id,
				createdDoc_rev: body.rev
			};
			responseObj.message = body.ok;
			return responseObj;
		}
	});
}

function retrieve_doc(_dbName, _params, res){
	console.log('Retrieve doc Db: '+JSON.stringify(_dbName));
	console.log('Retrieve doc params: '+JSON.stringify(_params));

	var db = nano.use(_dbName);

	db.list(function(error, body){
		if(!error){
			body.rows.forEach(function(doc){
				db.get(doc.id, function(error, body){
					if(!error){
						responseObj.data.push(body);
					}else{
						responseObj.error = error;
					}

					res.send(responseObj);
				});
			});
		}else{
			responseObj.success = false;
			responseObj.error = error;

			res.send(responseObj);
		}
	});
}

module.exports = {
	insert_doc: insert_doc,
	retrieve_doc: retrieve_doc
};