var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

console.log("Hello, Dry Ice app is starting up....");

require("ti-mocha");

var DryIce = DryIce || {};

var props = Ti.App.Properties.listProperties();

for (var i = 0, ilen = props.length; ilen > i; i++) {
    var value = Ti.App.Properties.getString(props[i]);
    console.log("Property: " + props[i] + " = " + value);
}

DryIce.resources = require("resources");

DryIce.utils = require("utils");

Alloy.createController("index");