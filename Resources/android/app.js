var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

console.log("Hello, Dry Ice app is starting up....");

var DryIce = DryIce || {};

DryIce.user = DryIce.user || {};

var props = Ti.App.Properties.listProperties();

for (var i = 0, ilen = props.length; ilen > i; i++) {
    var value = Ti.App.Properties.getString(props[i]);
    console.log("Property: " + props[i] + " = " + value);
}

DryIce.strings = {
    submit: "Submit",
    next: "Next",
    previous: "Previous",
    welcomeHeader: "Welcome to Dry Ice App!",
    logIn: "Login",
    username: "Username",
    password: "Password",
    register: "Register",
    registerUser: "Please enter your credentials.",
    user_name: "First Name",
    user_lastname: "Last Name",
    user_telNum: "Cell Phone Num",
    user_title_tf: "Title",
    user_telNum_tf: "Phone: 000-000-0000",
    user_email_tf: "Email: john.doe@company.com",
    user_password_tf: "Password",
    registerSite: "Please register your site.",
    site_name_tf: "Site Name",
    site_address1_tf: "Street address",
    site_address2_tf: "Suite",
    site_city_tf: "City",
    site_state_tf: "State",
    site_zip_tf: "Zip Code",
    placeOrder: "Place your order.",
    sameDay_lbl: "Same day delivery?",
    selectWeight_lbl: "Select weight:",
    submitOrder: "Order",
    confirmation: "Your order was sent successfully!",
    error: "Something went wrong, we saved your order and will process it shortly."
};

Alloy.createController("index");