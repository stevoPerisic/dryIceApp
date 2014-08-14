exports.definition = {
    config: {
        //"URL": "http://hidden-spire-3132.herokuapp.com/users/",
        "debug": 1,
        "adapter": {
            "type": "restapi",
            "collection_name": "user",
            // "idAttribute": "_id"
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
            initialize: function(attrs){
                if(_.isEmpty(this)){
                    console.log("Model has no properties...");
                }else{
                    console.log("We have some properties for this model...");

                    for(var i=0, ilen=this.length; i<ilen; i++){
                        var value = this[i];
                        console.log("Prop: "+this[i]+" = "+JSON.stringify(value));
                    }
                }
            },
            urlRoot: function(attrs){
                // setting up the model's URL so we can fetch info for just this single model
                return "http://hidden-spire-3132.herokuapp.com/users/:"+this.get("_id");
            },
            change: function(model, opts){
                console.log('\n\nCHANGE was triggered on the USER!');
                console.log("What changed?");
                for (var i=0, ilen=model.changes.length; i<ilen; i++){
                    var value = model.changes[i];
                    console.log("changed: "+model.changes[i] + ' = ' + value);
                }
            },
            add: function(model, collection, opts){
                console.log("Adding the user to the local collection.");
                console.log('Does this happen before we go out and save to the host?');
                console.log(model, collection, opts);
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};