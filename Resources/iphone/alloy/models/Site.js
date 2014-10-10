var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        URL: "http://hidden-spire-3132.herokuapp.com/site/",
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "site",
            idAttribute: "_id"
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
                console.log("Site model initialized...");
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            initialize: function() {
                console.log("Site collection initialized...");
            }
        });
        return Collection;
    }
};

model = Alloy.M("site", exports.definition, []);

collection = Alloy.C("site", exports.definition, model);

exports.Model = model;

exports.Collection = collection;