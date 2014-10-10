exports.setText = setText;

var setText = {
	userLogInForm: function(){
		$.headerTxt.setText(strings.welcomeHeader);
		$.username.setHintText(strings.username);
		$.password.setHintText(strings.password);
		$.logIn_Btn.setText(strings.logIn);
		$.register.setText(strings.register);
	},
	registerUserForm: function(){
		$.headerTxt.setText(strings.registerUser);
		$.user_name_tf.setHintText(strings.user_name);
		$.user_lastname_tf.setHintText(strings.user_lastname);
		$.user_title_tf.setHintText(strings.user_title_tf);
		$.user_telNum_tf.setHintText(strings.user_telNum_tf);
		$.user_email_tf.setHintText(strings.user_email_tf);
		$.user_password_tf.setHintText(strings.user_password_tf);
		$.submitUserRegistration.setText(strings.submit);
	},
	registerSiteForm: function(){
		$.headerTxt.setText(strings.registerSite);
		$.site_name_tf.setHintText(strings.site_name_tf);
		$.site_address1_tf.setHintText(strings.site_address1_tf);
		$.site_address2_tf.setHintText(strings.site_address2_tf);
		$.site_city_tf.setHintText(strings.site_city_tf);
		$.site_state_tf.setHintText(strings.site_state_tf);
		$.site_zip_tf.setHintText(strings.site_zip_tf);
		$.submitSiteRegistration.setText(strings.submit);
	},
	placeOrderForm: function(){
		$.headerTxt.setText(strings.placeOrder);
		$.sameDay_lbl.setText(strings.sameDay_lbl);
		$.selectWeight_lbl.setText(strings.selectWeight_lbl);
		setText.updateOrderBtn();
	},
	updateOrderBtn: function(){
		// console.log($.slider.increment);
		// console.log($.slider.value);
		var displayValue =  $.slider.value * $.slider.increment;
		$.submitOrder.setText(strings.submitOrder + ' ' + displayValue + ' lbs.');
	}
};