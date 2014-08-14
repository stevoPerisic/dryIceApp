var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        URL: "http://hidden-spire-3132.herokuapp.com/orders/",
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "orders",
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
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("orders", exports.definition, []);

collection = Alloy.C("orders", exports.definition, model);

exports.Model = model;

exports.Collection = collection;