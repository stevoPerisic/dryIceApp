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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signUp";
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
    $.__views.registerUser = Ti.UI.createView({
        height: "100%",
        width: "100%",
        layout: "vertical",
        bottom: "0dp",
        id: "registerUser"
    });
    $.__views.registerUser && $.addTopLevelView($.__views.registerUser);
    $.__views.formHolder = Ti.UI.createScrollView({
        height: "250dp",
        layout: "vertical",
        id: "formHolder",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true"
    });
    $.__views.registerUser.add($.__views.formHolder);
    $.__views.user_name_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: 0,
        id: "user_name_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.user_name_tf);
    moveFormUp ? $.__views.user_name_tf.addEventListener("return", moveFormUp) : __defers["$.__views.user_name_tf!return!moveFormUp"] = true;
    $.__views.user_lastname_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: -1,
        id: "user_lastname_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.user_lastname_tf);
    moveFormUp ? $.__views.user_lastname_tf.addEventListener("return", moveFormUp) : __defers["$.__views.user_lastname_tf!return!moveFormUp"] = true;
    $.__views.user_email_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: -1,
        keyboardType: Titanium.UI.KEYBOARD_EMAIL,
        id: "user_email_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.user_email_tf);
    moveFormUp ? $.__views.user_email_tf.addEventListener("return", moveFormUp) : __defers["$.__views.user_email_tf!return!moveFormUp"] = true;
    $.__views.user_password_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: -1,
        passwordMask: true,
        id: "user_password_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.user_password_tf);
    $.__views.__alloyId11 = Ti.UI.createView({
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
        id: "__alloyId11"
    });
    $.__views.formHolder.add($.__views.__alloyId11);
    $.__views.signUp_btn = Ti.UI.createLabel({
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
        id: "signUp_btn"
    });
    $.__views.formHolder.add($.__views.signUp_btn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var formHolderChildren = _.filter($.formHolder.getChildren(), function(textBox) {
        return "formInput" === textBox.data_role;
    });
    $.user_name_tf.setHintText(DryIce.resources.strings.user_name);
    $.user_lastname_tf.setHintText(DryIce.resources.strings.user_lastname);
    $.user_email_tf.setHintText(DryIce.resources.strings.user_email_tf);
    $.user_password_tf.setHintText(DryIce.resources.strings.user_password_tf);
    $.signUp_btn.setText(DryIce.resources.strings.register);
    $.signUp_btn.addEventListener("click", function() {
        DryIce.utils.loadSubView({
            context: $,
            controller: "createOrder",
            args: {},
            view: "placeOrder",
            removeMe: "registerUser"
        });
    });
    __defers["$.__views.user_name_tf!return!moveFormUp"] && $.__views.user_name_tf.addEventListener("return", moveFormUp);
    __defers["$.__views.user_lastname_tf!return!moveFormUp"] && $.__views.user_lastname_tf.addEventListener("return", moveFormUp);
    __defers["$.__views.user_email_tf!return!moveFormUp"] && $.__views.user_email_tf.addEventListener("return", moveFormUp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;