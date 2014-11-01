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

require('ti-mocha');

// init the app namespace
var DryIce = DryIce || {};
// list properties
var props = Ti.App.Properties.listProperties();
for (var i=0, ilen=props.length; i<ilen; i++){
    var value = Ti.App.Properties.getString(props[i]);
    console.log("Property: "+props[i] + ' = ' + value);
}
// load resources
DryIce.resources = require("resources");
DryIce.utils = require('utils');

// we should check if the db is seeded

