function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function moveFormUp(e) {
        var index = _.indexOf(formHolderChildren, e.source);
        formHolderChildren[index + 1].focus();
    }
    function checkCreds() {
        DryIce.utils.loadSubView({
            context: $,
            controller: "createOrder",
            args: {},
            view: "placeOrder",
            removeMe: "logIn"
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
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
    var __defers = {};
    $.__views.logIn = Ti.UI.createView({
        height: "100%",
        width: "100%",
        layout: "vertical",
        bottom: "0dp",
        id: "logIn"
    });
    $.__views.logIn && $.addTopLevelView($.__views.logIn);
    $.__views.formHolder = Ti.UI.createScrollView({
        height: "250dp",
        layout: "vertical",
        id: "formHolder"
    });
    $.__views.logIn.add($.__views.formHolder);
    $.__views.username = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: 0,
        keyboardType: Titanium.UI.KEYBOARD_EMAIL,
        id: "username",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.username);
    moveFormUp ? $.__views.username.addEventListener("return", moveFormUp) : __defers["$.__views.username!return!moveFormUp"] = true;
    $.__views.password = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: -1,
        passwordMask: true,
        id: "password",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.password);
    $.__views.__alloyId10 = Ti.UI.createView({
        height: "8dp",
        backgroundColor: "transparent",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "-70"
            },
            endPoint: {
                x: "0",
                y: "6"
            },
            colors: [ "#dadada", "transparent" ],
            backFillStart: false
        },
        id: "__alloyId10"
    });
    $.__views.formHolder.add($.__views.__alloyId10);
    $.__views.forgotPassword = Ti.UI.createLabel({
        top: 10,
        color: "#666",
        font: {
            fontSize: "12dp"
        },
        text: "Forgot your password?",
        id: "forgotPassword"
    });
    $.__views.formHolder.add($.__views.forgotPassword);
    $.__views.logIn_Btn = Ti.UI.createLabel({
        height: "44dp",
        width: "95%",
        borderRadius: "5dp",
        borderColor: "#1d62f0",
        borderWidth: "2dp",
        backgroundImage: "none",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "13dp",
            fontWeight: "light"
        },
        color: "#fff",
        backgroundColor: "#1d62f0",
        top: 10,
        id: "logIn_Btn"
    });
    $.__views.formHolder.add($.__views.logIn_Btn);
    checkCreds ? $.__views.logIn_Btn.addEventListener("click", checkCreds) : __defers["$.__views.logIn_Btn!click!checkCreds"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    console.log("Login controller created");
    var formHolderChildren = _.filter($.formHolder.getChildren(), function(textBox) {
        return "formInput" === textBox.data_role;
    });
    $.username.setHintText(DryIce.resources.strings.username);
    $.password.setHintText(DryIce.resources.strings.password);
    $.logIn_Btn.setText(DryIce.resources.strings.logIn);
    __defers["$.__views.username!return!moveFormUp"] && $.__views.username.addEventListener("return", moveFormUp);
    __defers["$.__views.logIn_Btn!click!checkCreds"] && $.__views.logIn_Btn.addEventListener("click", checkCreds);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;