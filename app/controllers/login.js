var args = arguments[0] || {};

var creds = {
	user: "stevo@perisicdesigns.com",
	pass: "1234"
}

console.log('Login controller created');

var formHolderChildren = _.filter($.formHolder.getChildren(), function(textBox){ return textBox.data_role === "formInput"});

function moveFormUp(e){
	var index = _.indexOf(formHolderChildren, e.source);
	formHolderChildren[index+1].focus();
}

function checkCreds(){
	DryIce.utils.loadSubView({context: $, controller: "createOrder", args: {}, view: "placeOrder", removeMe: "logIn"});
	
	// var loginCreds = {};
	// loginCreds.user = $.username.getValue();
	// loginCreds.pass = $.password.getValue();

	// if(_.isEqual(creds, loginCreds)){
	// 	DryIce.utils.loadOrderScreen(DryIce.appContext)
	// }else{
	// 	alert("Invalid login!")
	// }
}

$.username.setHintText(DryIce.resources.strings.username);
$.password.setHintText(DryIce.resources.strings.password);
$.logIn_Btn.setText(DryIce.resources.strings.logIn);
