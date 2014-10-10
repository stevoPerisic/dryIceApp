function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function updateUI() {
        setText.userLogInForm();
        $.logIn.setVisible(true);
    }
    function onOpen() {
        console.log("Index opening...");
        updateUI();
        $.username.focus();
    }
    function collectFormData(_form) {
        var formData = {};
        var model = "userRegistrationForm" === _form.id ? "user" : "siteRegistrationForm" === _form.id ? "site" : "orderForm" === _form.id ? "orders" : false;
        if (!model) return false;
        _.each(_form.children, function(input) {
            if (input.data_role && "formInput" === input.data_role) {
                if (input.value.length < 1) {
                    alert("Must enter value in the field");
                    return false;
                }
                var fieldName = input.id;
                fieldName = fieldName.replace("_tf", "");
                formData[fieldName] = "user_password" == fieldName ? Ti.Utils.md5HexDigest(input.value) : input.value;
            } else if (input.children.length > 0) {
                console.log("Has children...");
                _.each(input.children, function(child) {
                    child.data_role && "formInput" === child.data_role && (formData[child.id] = child.value);
                });
            }
        });
        console.log("Form data: " + JSON.stringify(formData));
        var newModel = Alloy.createModel(model, formData);
        newModel.save({
            success: function(model) {
                console.log("Model: " + JSON.stringify(model));
            },
            error: function(model) {
                console.log("Model: " + JSON.stringify(model));
            }
        });
    }
    function addEvents() {
        $.index.addEventListener("close", removeEvents);
        $.index.addEventListener("open", onOpen);
        $.logIn_Btn.addEventListener("click", function() {
            var creds = {
                username: "",
                password: ""
            };
            creds.username = $.username.getValue();
            creds.password = Ti.Utils.md5HexDigest($.password.getValue());
            console.log("I want to log in with: " + JSON.stringify(creds));
        });
        $.register.addEventListener("click", function() {
            $.logIn.hide();
            setText.registerUserForm();
            $.registerUser.show();
        });
        $.user_name_tf.addEventListener("return", function() {
            var topOffset = $.registerUser.getTop();
            console.log(topOffset);
            $.registerUser.setTop(topOffset - 62);
            $.user_lastname_tf.focus();
        });
        $.user_lastname_tf.addEventListener("return", function() {
            var topOffset = $.registerUser.getTop();
            $.registerUser.setTop(topOffset - 62);
            $.user_title_tf.focus();
        });
        $.submitUserRegistration.addEventListener("click", function() {
            collectFormData($.userRegistrationForm);
            $.registerUser.setVisible(false);
            setText.registerSiteForm();
            $.registerSite.setVisible(true);
            $.site_name_tf.focus();
        });
        $.submitSiteRegistration.addEventListener("click", function() {
            $.registerSite.setVisible(false);
            $.site_city_tf.blur();
            setText.placeOrderForm();
            $.placeOrder.setVisible(true);
            collectFormData($.siteRegistrationForm);
        });
        $.site_name_tf.addEventListener("return", function() {
            var topOffset = $.registerSite.getTop();
            $.registerSite.setTop(topOffset - 62);
            $.site_address1_tf.focus();
        });
        $.site_address1_tf.addEventListener("return", function() {
            var topOffset = $.registerSite.getTop();
            $.registerSite.setTop(topOffset - 62);
            $.site_address2_tf.focus();
        });
        $.site_address2_tf.addEventListener("return", function() {
            var topOffset = $.registerSite.getTop();
            $.registerSite.setTop(topOffset - 62);
            $.site_city_tf.focus();
        });
        $.submitOrder.addEventListener("click", function() {
            $.placeOrder.setVisible(false);
            $.orderSuccess.setVisible(true);
            collectFormData($.orderForm);
        });
        $.slider.addEventListener("touchend", function() {
            this.value = Math.round(this.value);
            setText.updateOrderBtn();
        });
    }
    function removeEvents() {
        console.log("remove events here if neccessary");
    }
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
        backgroundColor: "black",
        fullscreen: true,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "100"
            },
            endPoint: {
                x: "0",
                y: "800"
            },
            colors: [ "#f0f0f0", "#74BBFB" ],
            backFillStart: false
        },
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        width: "100%",
        top: 0,
        height: 40,
        backgroundColor: "#f0f0f0",
        borderWidth: 1,
        borderColor: "#dadada",
        zIndex: 2,
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.headerTxt = Ti.UI.createLabel({
        left: "5%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "18dp"
        },
        id: "headerTxt"
    });
    $.__views.header.add($.__views.headerTxt);
    $.__views.logIn = Ti.UI.createView({
        width: "95%",
        top: 40,
        id: "logIn"
    });
    $.__views.index.add($.__views.logIn);
    $.__views.userLogInForm = Ti.UI.createView({
        width: "95%",
        top: 5,
        layout: "vertical",
        id: "userLogInForm"
    });
    $.__views.logIn.add($.__views.userLogInForm);
    $.__views.username = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "username",
        data_role: "formInput"
    });
    $.__views.userLogInForm.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        passwordMask: true,
        id: "password",
        data_role: "formInput"
    });
    $.__views.userLogInForm.add($.__views.password);
    $.__views.logIn_Btn = Ti.UI.createLabel({
        left: 0,
        width: "99.5%",
        height: 52,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "0"
            },
            endPoint: {
                x: "0",
                y: "100"
            },
            colors: [ "#259E00", "#62bb47" ],
            backFillStart: false
        },
        backgroundSelectedColor: "#34aadc",
        backgroundFocusedColor: "#34aadc",
        id: "logIn_Btn"
    });
    $.__views.userLogInForm.add($.__views.logIn_Btn);
    $.__views.register = Ti.UI.createLabel({
        left: "25%",
        width: "50%",
        height: 52,
        color: "#5e86dc",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 10,
        font: {
            fontSize: "18dp"
        },
        id: "register"
    });
    $.__views.userLogInForm.add($.__views.register);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "30%",
        top: -10,
        left: "35%",
        height: 1,
        backgroundColor: "#5e86dc",
        id: "__alloyId0"
    });
    $.__views.userLogInForm.add($.__views.__alloyId0);
    $.__views.registerUser = Ti.UI.createView({
        width: "95%",
        top: 40,
        id: "registerUser"
    });
    $.__views.index.add($.__views.registerUser);
    $.__views.userRegistrationForm = Ti.UI.createView({
        width: "95%",
        top: 5,
        layout: "vertical",
        id: "userRegistrationForm"
    });
    $.__views.registerUser.add($.__views.userRegistrationForm);
    $.__views.user_name_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "user_name_tf",
        data_role: "formInput"
    });
    $.__views.userRegistrationForm.add($.__views.user_name_tf);
    $.__views.user_lastname_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "user_lastname_tf",
        data_role: "formInput"
    });
    $.__views.userRegistrationForm.add($.__views.user_lastname_tf);
    $.__views.user_title_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "user_title_tf",
        data_role: "formInput"
    });
    $.__views.userRegistrationForm.add($.__views.user_title_tf);
    $.__views.user_telNum_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "user_telNum_tf",
        data_role: "formInput"
    });
    $.__views.userRegistrationForm.add($.__views.user_telNum_tf);
    $.__views.user_email_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "user_email_tf",
        data_role: "formInput"
    });
    $.__views.userRegistrationForm.add($.__views.user_email_tf);
    $.__views.user_password_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "user_password_tf",
        data_role: "formInput"
    });
    $.__views.userRegistrationForm.add($.__views.user_password_tf);
    $.__views.submitUserRegistration = Ti.UI.createLabel({
        left: 0,
        width: "99.5%",
        height: 52,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "0"
            },
            endPoint: {
                x: "0",
                y: "100"
            },
            colors: [ "#259E00", "#62bb47" ],
            backFillStart: false
        },
        backgroundSelectedColor: "#34aadc",
        backgroundFocusedColor: "#34aadc",
        id: "submitUserRegistration"
    });
    $.__views.userRegistrationForm.add($.__views.submitUserRegistration);
    $.__views.registerSite = Ti.UI.createView({
        width: "95%",
        top: 40,
        id: "registerSite"
    });
    $.__views.index.add($.__views.registerSite);
    $.__views.siteRegistrationForm = Ti.UI.createView({
        width: "95%",
        top: 5,
        layout: "vertical",
        id: "siteRegistrationForm"
    });
    $.__views.registerSite.add($.__views.siteRegistrationForm);
    $.__views.site_name_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "site_name_tf",
        data_role: "formInput"
    });
    $.__views.siteRegistrationForm.add($.__views.site_name_tf);
    $.__views.site_address1_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "site_address1_tf",
        data_role: "formInput"
    });
    $.__views.siteRegistrationForm.add($.__views.site_address1_tf);
    $.__views.site_address2_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "site_address2_tf",
        data_role: "formInput"
    });
    $.__views.siteRegistrationForm.add($.__views.site_address2_tf);
    $.__views.site_city_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "site_city_tf",
        data_role: "formInput"
    });
    $.__views.siteRegistrationForm.add($.__views.site_city_tf);
    $.__views.site_state_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "site_state_tf",
        data_role: "formInput"
    });
    $.__views.siteRegistrationForm.add($.__views.site_state_tf);
    $.__views.site_zip_tf = Ti.UI.createTextField({
        top: 5,
        left: 0,
        width: "100%",
        height: 52,
        color: "#333",
        id: "site_zip_tf",
        data_role: "formInput"
    });
    $.__views.siteRegistrationForm.add($.__views.site_zip_tf);
    $.__views.submitSiteRegistration = Ti.UI.createLabel({
        left: 0,
        width: "99.5%",
        height: 52,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 10,
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "0"
            },
            endPoint: {
                x: "0",
                y: "100"
            },
            colors: [ "#259E00", "#62bb47" ],
            backFillStart: false
        },
        backgroundSelectedColor: "#34aadc",
        backgroundFocusedColor: "#34aadc",
        id: "submitSiteRegistration"
    });
    $.__views.siteRegistrationForm.add($.__views.submitSiteRegistration);
    $.__views.placeOrder = Ti.UI.createView({
        width: "95%",
        top: 30,
        id: "placeOrder"
    });
    $.__views.index.add($.__views.placeOrder);
    $.__views.orderForm = Ti.UI.createView({
        width: "95%",
        top: 5,
        layout: "vertical",
        id: "orderForm"
    });
    $.__views.placeOrder.add($.__views.orderForm);
    $.__views.switchWrap = Ti.UI.createView({
        width: "100%",
        top: 10,
        height: 42,
        id: "switchWrap"
    });
    $.__views.orderForm.add($.__views.switchWrap);
    $.__views.sameDay_lbl = Ti.UI.createLabel({
        left: "5%",
        width: "60%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "18dp"
        },
        id: "sameDay_lbl"
    });
    $.__views.switchWrap.add($.__views.sameDay_lbl);
    $.__views.sameDaySwitch = Ti.UI.createSwitch({
        right: 0,
        top: 0,
        value: true,
        id: "sameDaySwitch",
        titleOn: "YES",
        titleOff: "NO",
        data_role: "formInput"
    });
    $.__views.switchWrap.add($.__views.sameDaySwitch);
    $.__views.selectWeight_lbl = Ti.UI.createLabel({
        left: "5%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "18dp"
        },
        id: "selectWeight_lbl"
    });
    $.__views.orderForm.add($.__views.selectWeight_lbl);
    $.__views.sliderIncrements = Ti.UI.createView({
        width: "100%",
        top: "0.5%",
        height: 26,
        layout: "horizontal",
        id: "sliderIncrements"
    });
    $.__views.orderForm.add($.__views.sliderIncrements);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "0",
        id: "__alloyId1"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "5",
        id: "__alloyId2"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "10",
        id: "__alloyId3"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "15",
        id: "__alloyId4"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "20",
        id: "__alloyId5"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "25",
        id: "__alloyId6"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "30",
        id: "__alloyId7"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "35",
        id: "__alloyId8"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "40",
        id: "__alloyId9"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "45",
        id: "__alloyId10"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        left: "0.8%",
        width: "8.4%",
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "14dp"
        },
        text: "50",
        id: "__alloyId11"
    });
    $.__views.sliderIncrements.add($.__views.__alloyId11);
    $.__views.slider = Ti.UI.createSlider({
        top: 20,
        id: "slider",
        min: "0",
        max: "10",
        width: "100%",
        value: "1",
        increment: "5",
        data_role: "formInput"
    });
    $.__views.orderForm.add($.__views.slider);
    $.__views.submitOrder = Ti.UI.createLabel({
        left: 0,
        width: "99.5%",
        height: 52,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 20,
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0",
                y: "0"
            },
            endPoint: {
                x: "0",
                y: "100"
            },
            colors: [ "#259E00", "#62bb47" ],
            backFillStart: false
        },
        backgroundSelectedColor: "#34aadc",
        backgroundFocusedColor: "#34aadc",
        id: "submitOrder"
    });
    $.__views.orderForm.add($.__views.submitOrder);
    $.__views.orderSuccess = Ti.UI.createView({
        width: "95%",
        top: "0.5%",
        id: "orderSuccess"
    });
    $.__views.index.add($.__views.orderSuccess);
    $.__views.confirmation = Ti.UI.createLabel({
        left: "5%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "18dp"
        },
        id: "confirmation"
    });
    $.__views.orderSuccess.add($.__views.confirmation);
    $.__views.orderFailed = Ti.UI.createView({
        width: "95%",
        top: "0.5%",
        id: "orderFailed"
    });
    $.__views.index.add($.__views.orderFailed);
    $.__views.failedOrder = Ti.UI.createLabel({
        left: "5%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 10,
        font: {
            fontSize: "18dp"
        },
        id: "failedOrder"
    });
    $.__views.orderFailed.add($.__views.failedOrder);
    exports.destroy = function() {};
    _.extend($, $.__views);
    console.log("Index cotroller reading....");
    var strings = DryIce.strings;
    var setText = {
        userLogInForm: function() {
            $.headerTxt.setText(strings.welcomeHeader);
            $.username.setHintText(strings.username);
            $.password.setHintText(strings.password);
            $.logIn_Btn.setText(strings.logIn);
            $.register.setText(strings.register);
        },
        registerUserForm: function() {
            $.headerTxt.setText(strings.registerUser);
            $.user_name_tf.setHintText(strings.user_name);
            $.user_lastname_tf.setHintText(strings.user_lastname);
            $.user_title_tf.setHintText(strings.user_title_tf);
            $.user_telNum_tf.setHintText(strings.user_telNum_tf);
            $.user_email_tf.setHintText(strings.user_email_tf);
            $.user_password_tf.setHintText(strings.user_password_tf);
            $.submitUserRegistration.setText(strings.submit);
        },
        registerSiteForm: function() {
            $.headerTxt.setText(strings.registerSite);
            $.site_name_tf.setHintText(strings.site_name_tf);
            $.site_address1_tf.setHintText(strings.site_address1_tf);
            $.site_address2_tf.setHintText(strings.site_address2_tf);
            $.site_city_tf.setHintText(strings.site_city_tf);
            $.site_state_tf.setHintText(strings.site_state_tf);
            $.site_zip_tf.setHintText(strings.site_zip_tf);
            $.submitSiteRegistration.setText(strings.submit);
        },
        placeOrderForm: function() {
            $.headerTxt.setText(strings.placeOrder);
            $.sameDay_lbl.setText(strings.sameDay_lbl);
            $.selectWeight_lbl.setText(strings.selectWeight_lbl);
            setText.updateOrderBtn();
        },
        updateOrderBtn: function() {
            var displayValue = $.slider.value * $.slider.increment;
            $.submitOrder.setText(strings.submitOrder + " " + displayValue + " lbs.");
        }
    };
    addEvents();
    $.registerUser.setVisible(false);
    $.registerSite.setVisible(false);
    $.placeOrder.setVisible(false);
    $.orderSuccess.setVisible(false);
    $.orderFailed.setVisible(false);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;