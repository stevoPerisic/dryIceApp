exports.definition = {
    config: {
        "URL": "http://hidden-spire-3132.herokuapp.com/site/",
        "debug": 1,
        "adapter": {
            "type": "restapi",
            "collection_name": "site",
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
        _.extend(Model.prototype, {
            initialize: function(){
                console.log("Site model initialized...");
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            initialize: function(){
                console.log("Site collection initialized...");
            }
        });
        return Collection;
    }
};