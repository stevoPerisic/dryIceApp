var args = arguments[0] || {};

var formHolderChildren = _.filter($.formHolder.getChildren(), function(textBox){ return textBox.data_role === "formInput"});

function moveFormUp(e){
	var index = _.indexOf(formHolderChildren, e.source);
	formHolderChildren[index+1].focus();
}

$.user_name_tf.setHintText(DryIce.resources.strings.user_name);
$.user_lastname_tf.setHintText(DryIce.resources.strings.user_lastname);
$.user_email_tf.setHintText(DryIce.resources.strings.user_email_tf);
$.user_password_tf.setHintText(DryIce.resources.strings.user_password_tf);
$.signUp_btn.setText(DryIce.resources.strings.register);

$.signUp_btn.addEventListener('click', function(e){
	DryIce.utils.loadSubView({context: $, controller: "createOrder", args: {}, view: "placeOrder", removeMe: "registerUser"});
});

