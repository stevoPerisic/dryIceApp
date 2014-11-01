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
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#f2f2f2",
        fullscreen: false,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.background = Ti.UI.createImageView({
        top: "20dp",
        left: 0,
        id: "background",
        image: "/images/appBackground.png"
    });
    $.__views.index.add($.__views.background);
    $.__views.content = Ti.UI.createView({
        top: "20dp",
        backgroundColor: "transparent",
        borderColor: "#ccc",
        id: "content"
    });
    $.__views.index.add($.__views.content);
    $.__views.startPage = Ti.UI.createView({
        height: "80%",
        width: "100%",
        layout: "composite",
        bottom: "0dp",
        zIndex: 2,
        id: "startPage"
    });
    $.__views.content.add($.__views.startPage);
    $.__views.welcome = Ti.UI.createLabel({
        top: 0,
        text: "Welcome to Dry Ice App!",
        id: "welcome"
    });
    $.__views.startPage.add($.__views.welcome);
    $.__views.signUp = Ti.UI.createLabel({
        height: "44dp",
        width: "45%",
        borderRadius: "5dp",
        borderColor: "#1c1d1c",
        borderWidth: "2dp",
        backgroundImage: "none",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "13dp",
            fontWeight: "light"
        },
        backgroundColor: "#fff",
        left: "2.5%",
        bottom: "40dp",
        text: "SIGN UP",
        id: "signUp"
    });
    $.__views.startPage.add($.__views.signUp);
    $.__views.signIn = Ti.UI.createLabel({
        height: "44dp",
        width: "45%",
        borderRadius: "5dp",
        borderColor: "#1c1d1c",
        borderWidth: "2dp",
        backgroundImage: "none",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "13dp",
            fontWeight: "light"
        },
        backgroundColor: "#fff",
        right: "2.5%",
        bottom: "40dp",
        text: "SIGN IN",
        id: "signIn"
    });
    $.__views.startPage.add($.__views.signIn);
    $.__views.opacity = Ti.UI.createView({
        top: 0,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        opacity: .7,
        id: "opacity"
    });
    $.__views.content.add($.__views.opacity);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.index.addEventListener("open", function() {
        require("spec/test")(DryIce, $.index);
    });
    $.signUp.addEventListener("click", function() {
        DryIce.utils.loadSubView({
            context: $,
            controller: "signUp",
            args: {},
            view: "registerUser",
            removeMe: "startPage"
        });
    });
    $.signIn.addEventListener("click", function() {
        DryIce.utils.loadSubView({
            context: $,
            controller: "login",
            args: {},
            view: "logIn",
            removeMe: "startPage"
        });
    });
    DryIce.appContext = $;
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;