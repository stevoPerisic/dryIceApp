var args = arguments[0] || {};

var formHolderChildren = _.union(
		_.filter($.formHolder.getChildren(), function(textBox){ return textBox.data_role === "formInput"}),
		_.filter($.cityStateZip_Wrap.getChildren(), function(textBox){ return textBox.data_role === "formInput"})
	);

function moveFormUp(e){
	var index = _.indexOf(formHolderChildren, e.source);
	formHolderChildren[index+1].focus();
}

function updateOrderBtn (){
	// console.log($.slider.increment);
	// console.log($.slider.value);
	var displayValue =  $.slider.value * $.slider.increment;
	$.submitOrder.setText(DryIce.resources.strings.submitOrder + ' ' + displayValue + ' lbs.');
}

$.slider.addEventListener('touchend', function(e){
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