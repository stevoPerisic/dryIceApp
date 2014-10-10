var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "user"
        },
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-encoding": "gzip"
        },
        parentNode: "data"
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            initialize: function() {
                if (_.isEmpty(this)) console.log("Model has no properties..."); else {
                    console.log("We have some properties for this model...");
                    for (var i = 0, ilen = this.length; ilen > i; i++) {
                        var value = this[i];
                        console.log("Prop: " + this[i] + " = " + JSON.stringify(value));
                    }
                }
            },
            urlRoot: function() {
                return "http://hidden-spire-3132.herokuapp.com/users/:" + this.get("_id");
            },
            change: function(model) {
                console.log("\n\nCHANGE was triggered on the USER!");
                console.log("What changed?");
                for (var i = 0, ilen = model.changes.length; ilen > i; i++) {
                    var value = model.changes[i];
                    console.log("changed: " + model.changes[i] + " = " + value);
                }
            },
            add: function(model, collection, opts) {
                console.log("Adding the user to the local collection.");
                console.log("Does this happen before we go out and save to the host?");
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

model = Alloy.M("user", exports.definition, []);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;