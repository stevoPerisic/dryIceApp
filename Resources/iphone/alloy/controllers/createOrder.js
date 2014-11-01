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
    function updateOrderBtn() {
        var displayValue = $.slider.value * $.slider.increment;
        $.submitOrder.setText(DryIce.resources.strings.submitOrder + " " + displayValue + " lbs.");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "createOrder";
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
    $.__views.placeOrder = Ti.UI.createView({
        height: "100%",
        width: "100%",
        layout: "vertical",
        bottom: "0dp",
        id: "placeOrder"
    });
    $.__views.placeOrder && $.addTopLevelView($.__views.placeOrder);
    $.__views.formHolder = Ti.UI.createScrollView({
        height: "300dp",
        layout: "vertical",
        id: "formHolder"
    });
    $.__views.placeOrder.add($.__views.formHolder);
    $.__views.switchWrap = Ti.UI.createView({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: 0,
        layout: "horizontal",
        id: "switchWrap"
    });
    $.__views.formHolder.add($.__views.switchWrap);
    $.__views.sameDay_lbl = Ti.UI.createLabel({
        top: "10dp",
        id: "sameDay_lbl"
    });
    $.__views.switchWrap.add($.__views.sameDay_lbl);
    $.__views.sameDaySwitch = Ti.UI.createSwitch({
        top: "6dp",
        left: "70dp",
        value: true,
        id: "sameDaySwitch",
        titleOn: "YES",
        titleOff: "NO"
    });
    $.__views.switchWrap.add($.__views.sameDaySwitch);
    $.__views.sliderWrap = Ti.UI.createView({
        height: "100dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        layout: "vertical",
        top: -1,
        id: "sliderWrap"
    });
    $.__views.formHolder.add($.__views.sliderWrap);
    $.__views.selectWeight_lbl = Ti.UI.createLabel({
        top: "5dp",
        width: "100%",
        font: {
            fontSize: "12dp"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        id: "selectWeight_lbl"
    });
    $.__views.sliderWrap.add($.__views.selectWeight_lbl);
    $.__views.sliderIncrements = Ti.UI.createView({
        top: "10dp",
        width: "90%",
        height: "20dp",
        layout: "horizontal",
        font: {
            fontSize: "12dp"
        },
        id: "sliderIncrements"
    });
    $.__views.sliderWrap.add($.__views.sliderIncrements);
    $.__views.zero = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: "12dp"
        },
        id: "zero",
        text: "5"
    });
    $.__views.sliderIncrements.add($.__views.zero);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "10",
        id: "__alloyId0"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "15",
        id: "__alloyId1"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "20",
        id: "__alloyId2"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "25",
        id: "__alloyId3"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "30",
        id: "__alloyId4"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "35",
        id: "__alloyId5"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "40",
        id: "__alloyId6"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "45",
        id: "__alloyId7"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        left: 16,
        font: {
            fontSize: "12dp"
        },
        text: "50",
        id: "__alloyId8"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId8);
    $.__views.slider = Ti.UI.createSlider({
        width: "90%",
        id: "slider",
        min: "1",
        max: "10",
        value: "1",
        increment: "5"
    });
    $.__views.sliderWrap.add($.__views.slider);
    $.__views.site_address1_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: -1,
        id: "site_address1_tf",
        data_role: "formInput"
    });
    $.__views.formHolder.add($.__views.site_address1_tf);
    moveFormUp ? $.__views.site_address1_tf.addEventListener("return", moveFormUp) : __defers["$.__views.site_address1_tf!return!moveFormUp"] = true;
    $.__views.cityStateZip_Wrap = Ti.UI.createView({
        height: "44dp",
        width: "100%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        top: -1,
        layout: "horizontal",
        id: "cityStateZip_Wrap"
    });
    $.__views.formHolder.add($.__views.cityStateZip_Wrap);
    $.__views.site_city_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "45%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        id: "site_city_tf",
        data_role: "formInput"
    });
    $.__views.cityStateZip_Wrap.add($.__views.site_city_tf);
    moveFormUp ? $.__views.site_city_tf.addEventListener("return", moveFormUp) : __defers["$.__views.site_city_tf!return!moveFormUp"] = true;
    $.__views.site_state_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "20%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        left: -1,
        id: "site_state_tf",
        data_role: "formInput"
    });
    $.__views.cityStateZip_Wrap.add($.__views.site_state_tf);
    moveFormUp ? $.__views.site_state_tf.addEventListener("return", moveFormUp) : __defers["$.__views.site_state_tf!return!moveFormUp"] = true;
    $.__views.site_zip_tf = Ti.UI.createTextField({
        height: "44dp",
        width: "35.5%",
        borderColor: "#ccc",
        borderWidth: "1dp",
        autocorrect: false,
        left: -1,
        id: "site_zip_tf",
        data_role: "formInput"
    });
    $.__views.cityStateZip_Wrap.add($.__views.site_zip_tf);
    $.__views.__alloyId9 = Ti.UI.createView({
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
        id: "__alloyId9"
    });
    $.__views.formHolder.add($.__views.__alloyId9);
    $.__views.submitOrder = Ti.UI.createLabel({
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
        id: "submitOrder"
    });
    $.__views.formHolder.add($.__views.submitOrder);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var formHolderChildren = _.union(_.filter($.formHolder.getChildren(), function(textBox) {
        return "formInput" === textBox.data_role;
    }), _.filter($.cityStateZip_Wrap.getChildren(), function(textBox) {
        return "formInput" === textBox.data_role;
    }));
    $.slider.addEventListener("touchend", function() {
        this.value = Math.round(this.value);
        updateOrderBtn();
    });
    $.sameDay_lbl.setText(DryIce.resources.strings.sameDay_lbl);
    $.selectWeight_lbl.setText(DryIce.resources.strings.selectWeight_lbl);
    updateOrderBtn();
    $.site_address1_tf.setHintText(DryIce.resources.strings.site_address1_tf);
    $.site_city_tf.setHintText(DryIce.resources.strings.site_city_tf);
    $.site_state_tf.setHintText(DryIce.resources.strings.site_state_tf);
    $.site_zip_tf.setHintText(DryIce.resources.strings.site_zip_tf);
    __defers["$.__views.site_address1_tf!return!moveFormUp"] && $.__views.site_address1_tf.addEventListener("return", moveFormUp);
    __defers["$.__views.site_city_tf!return!moveFormUp"] && $.__views.site_city_tf.addEventListener("return", moveFormUp);
    __defers["$.__views.site_state_tf!return!moveFormUp"] && $.__views.site_state_tf.addEventListener("return", moveFormUp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;