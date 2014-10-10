var args = arguments[0] || {};

console.log('Index cotroller reading....');

$.index.open();

// THIS FOR DB CREATION
//
// we'll take the user's email and password run it through the sha1_digest and name the DB with what comes back :)
// hopefully it will work :)
//
// var sha1 = require('alloy/sha1');
// var sha1_digest = sha1.hex_sha1('The quick brown fox jumps over the lazy dog.');
// alert(sha1_digest);

// var strings = DryIce.strings;

// for the server request
// sendEmail route
// http://hidden-spire-3132.herokuapp.com/sendEmail
// 

// var URL = 'http://hidden-spire-3132.herokuapp.com/sendEmail';
// var payload = {"fromTheApp": "hello from"};

/*
function updateUI(){
	setText.userLogInForm();
	$.logIn.setVisible(true);
}

function onOpen(){

	console.log('Index opening...');
	updateUI();
	$.username.focus();

	// DryIce.user.fetch({
	// 	success: function(model, response, options){
	// 		console.log('User fetched, result: '+JSON.stringify(model));
	// 		if(model.attributes && _.isFunction(model.get)){
	// 			Ti.App.Properties.setString('registered', 'true');
	// 		}

	// 		updateUI();
	// 	},
	// 	error: function(model, response, options){
	// 		// alert(model);

	// 		updateUI();
	// 	}
	// });
}

function collectFormData(_form){
	var formData = {};
	var model = (_form.id === 'userRegistrationForm') ? 'user' : (_form.id === 'siteRegistrationForm') ? 'site' : (_form.id === 'orderForm') ? 'orders' : false;

	if(!model)
		return false;
	
	_.each(_form.children, function(input){
		if(input.data_role && input.data_role === 'formInput'){
			// console.log(input.value);

			if(input.value.length < 1){
				alert('Must enter value in the field');
				return false;
			}

			var fieldName = input.id;
			fieldName = fieldName.replace('_tf', ''); // clean up the names for the model params

			formData[fieldName] = (fieldName == 'user_password') ? Ti.Utils.md5HexDigest(input.value) : input.value;
		}
		else if(input.children.length > 0){
			console.log('Has children...');
			_.each(input.children, function(child){
				if(child.data_role && child.data_role === 'formInput'){
					// console.log(child.value);
					formData[child.id] = child.value;
				}
			});
		}
	});

	console.log('Form data: '+JSON.stringify(formData));

	var newModel = Alloy.createModel(model, formData);
	newModel.save({
		success: function(model, response, options){
			console.log('Model: '+JSON.stringify(model));
		},
		error: function(model, response, options){
			console.log('Model: '+JSON.stringify(model));
		}
	});
}

function addEvents(){
	$.index.addEventListener('close', removeEvents);
	$.index.addEventListener('open', onOpen);

	// user login
		$.logIn_Btn.addEventListener('click', function(e){
			var creds = {username: '', password: ''};
			creds.username = $.username.getValue();
			creds.password = Ti.Utils.md5HexDigest($.password.getValue()); // encoding the password
			console.log('I want to log in with: '+JSON.stringify(creds));

			// let's make a one off request to the API for login
			

		});
		$.register.addEventListener('click', function(e){
			$.logIn.hide();
			setText.registerUserForm();
			$.registerUser.show();
		});

	// set up user registration form evts
		$.user_name_tf.addEventListener('return', function(e){
			var topOffset = $.registerUser.getTop();
			console.log(topOffset);
			$.registerUser.setTop(topOffset - 62);

			$.user_lastname_tf.focus();
		});
		$.user_lastname_tf.addEventListener('return', function(e){
			var topOffset = $.registerUser.getTop();
			$.registerUser.setTop(topOffset - 62);
			$.user_title_tf.focus();
		});

	// submitUserRegistration
		$.submitUserRegistration.addEventListener('click', function(e){
			// here we have to collect data from the User registration form and submit to Cloudant DB
			// perhaps a function to collect form data into a JSON object
			collectFormData($.userRegistrationForm);

			$.registerUser.setVisible(false);
			setText.registerSiteForm();
			$.registerSite.setVisible(true);
			$.site_name_tf.focus();
		});

	// submitSiteRegistration
		$.submitSiteRegistration.addEventListener('click', function(e){
			$.registerSite.setVisible(false);
			$.site_city_tf.blur();
			setText.placeOrderForm();
			$.placeOrder.setVisible(true);

			collectFormData($.siteRegistrationForm);
		});
		$.site_name_tf.addEventListener('return', function(e){
			var topOffset = $.registerSite.getTop();
			$.registerSite.setTop(topOffset - 62);
			$.site_address1_tf.focus();
		});
		$.site_address1_tf.addEventListener('return', function(e){
			var topOffset = $.registerSite.getTop();
			$.registerSite.setTop(topOffset - 62);
			$.site_address2_tf.focus();
		});
		$.site_address2_tf.addEventListener('return', function(e){
			var topOffset = $.registerSite.getTop();
			$.registerSite.setTop(topOffset - 62);
			$.site_city_tf.focus();
		});

	// submitOrder
		$.submitOrder.addEventListener('click', function(e){
			$.placeOrder.setVisible(false);
			$.orderSuccess.setVisible(true);

			collectFormData($.orderForm);
		});
		$.slider.addEventListener('touchend', function(e){
			this.value = Math.round(this.value);
			setText.updateOrderBtn();
		});
}

function removeEvents(){
	console.log('remove events here if neccessary');
}

addEvents();

$.registerUser.setVisible(false);
$.registerSite.setVisible(false);
$.placeOrder.setVisible(false);
$.orderSuccess.setVisible(false);
$.orderFailed.setVisible(false);*/



