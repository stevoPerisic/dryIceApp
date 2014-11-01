function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userProfile";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.userProfile = Ti.UI.createView({
        height: "80%",
        width: "100%",
        layout: "composite",
        bottom: "0dp",
        id: "userProfile"
    });
    $.__views.userProfile && $.addTopLevelView($.__views.userProfile);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "User Profile page",
        id: "__alloyId12"
    });
    $.__views.userProfile.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;