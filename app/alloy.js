// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
console.log('Hello, Dry Ice app is starting up....');

var DryIce = DryIce || {};
// init the user model
DryIce.user = DryIce.user || {};

var props = Ti.App.Properties.listProperties();

for (var i=0, ilen=props.length; i<ilen; i++){
    var value = Ti.App.Properties.getString(props[i]);
    console.log("Property: "+props[i] + ' = ' + value);
}

// string resources
DryIce.strings = {
	submit: 'Submit',
	next: 'Next',
	previous: 'Previous',
	welcomeHeader: 'Welcome to Dry Ice App!',
	// LOGIN
	logIn: 'Login',
	username: 'Username',
	password: 'Password',
	register: 'Register',
	// register user
	registerUser: 'Please enter your credentials.',
	user_name: 'First Name',
	user_lastname: 'Last Name',
	user_telNum: 'Cell Phone Num',
	user_title_tf: 'Title',
	user_telNum_tf: 'Phone: 000-000-0000',
	user_email_tf: 'Email: john.doe@company.com',
	user_password_tf: "Password",
	// register site
	registerSite: 'Please register your site.',
	site_name_tf:'Site Name',
	site_address1_tf: 'Street address',
	site_address2_tf: 'Suite',
	site_city_tf: 'City',
	site_state_tf: 'State',
	site_zip_tf: 'Zip Code',
	// place order
	placeOrder: 'Place your order.',
	sameDay_lbl: 'Same day delivery?',
	selectWeight_lbl: 'Select weight:',
	submitOrder: 'Order',
	confirmation: 'Your order was sent successfully!',
	error: 'Something went wrong, we saved your order and will process it shortly.'
};





