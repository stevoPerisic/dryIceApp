var args = arguments[0] || {};

function loadRegisterSiteScreen(){
	var registerSiteView = Alloy.createController("registerSite");
	$.content.remove($.startPage);
	$.content.add(registerSiteView.getView("registerSite"));
}

$.index.addEventListener('open', function(){
	require('spec/test')(DryIce, $.index);
});

$.signUp.addEventListener("click", function(){
	DryIce.utils.loadSubView({context: $, controller: "signUp", args: {}, view: "registerUser", removeMe: "startPage"});
});

$.signIn.addEventListener("click", function(){
	DryIce.utils.loadSubView({context: $, controller: "login", args: {}, view: "logIn", removeMe: "startPage"});
});

DryIce.appContext = $;

$.index.open();



