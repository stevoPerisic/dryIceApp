exports.definition = {
    config: {
        "URL": "http://hidden-spire-3132.herokuapp.com/orders/",
        "debug": 1,
        "adapter": {
            "type": "restapi",
            "collection_name": "orders",
            "idAttribute": "_id"
        },
        "headers": { // your custom headers
			"Content-Type" : "application/json",
			"Accept" : "application/json",
			"Accept-encoding" : "gzip"
        },
        "parentNode": "data" //your root node
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};


// exports.definition = {
// 	config: {
// 		columns: {
// 			"weight": "text"
// 		},
// 		adapter: {
// 			type: "sql",
// 			collection_name: "orders"
// 		}
// 	},
// 	extendModel: function(Model) {
// 		_.extend(Model.prototype, {
// 			// extended functions and properties go here
// 			initialize: function(){
// 				alert('order initialized');
// 			}
// 		});

// 		return Model;
// 	},
// 	extendCollection: function(Collection) {
// 		_.extend(Collection.prototype, {
// 			// extended functions and properties go here
// 			initialize: function(){
// 				alert('Orders collection started');
// 			}
// 		});

// 		return Collection;
// 	}
// };