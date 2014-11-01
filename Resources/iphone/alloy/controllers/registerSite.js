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
    this.__controllerPath = "registerSite";
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
    $.__views.registerSite = Ti.UI.createView({
        height: "80%",
        width: "100%",
        layout: "composite",
        bottom: "0dp",
        id: "registerSite"
    });
    $.__views.registerSite && $.addTopLevelView($.__views.registerSite);
    $.__views.registerSite_text = Ti.UI.createLabel({
        top: 0,
        id: "registerSite_text"
    });
    $.__views.registerSite.add($.__views.registerSite_text);
    $.__views.formHolder = Ti.UI.createView({
        id: "formHolder"
    });
    $.__views.registerSite.add($.__views.formHolder);
    $.__views.site_address1_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        bottom: "272dp",
        id: "site_address1_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.site_address1_tf);
    $.__views.site_address2_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        bottom: "229dp",
        id: "site_address2_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.site_address2_tf);
    $.__views.site_city_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        bottom: "186dp",
        id: "site_city_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.site_city_tf);
    $.__views.site_state_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        bottom: "143dp",
        id: "site_state_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.site_state_tf);
    $.__views.site_zip_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        bottom: "100dp",
        id: "site_zip_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.site_zip_tf);
    $.__views.submitSiteRegistration = Ti.UI.createLabel({
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
        bottom: "40dp",
        id: "submitSiteRegistration"
    });
    $.__views.formHolder.add($.__views.submitSiteRegistration);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.registerSite_text.setText(DryIce.resources.strings.registerSite_text);
    $.site_address1_tf.setHintText(DryIce.resources.strings.site_address1_tf);
    $.site_address2_tf.setHintText(DryIce.resources.strings.site_address2_tf);
    $.site_city_tf.setHintText(DryIce.resources.strings.site_city_tf);
    $.site_state_tf.setHintText(DryIce.resources.strings.site_state_tf);
    $.site_zip_tf.setHintText(DryIce.resources.strings.site_zip_tf);
    $.submitSiteRegistration.setText(DryIce.resources.strings.registerSite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;