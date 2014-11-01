// UTILS

// loadSubView(_args)
//	_args 
//	contains:
//		context - context of the child view
//		controller - controller to be created
//		args - arguments to be passed onto the child view
//		view - string name of the controller
//		removeMe - string name of the view to remove from parent view
var loadSubView = function(_args){
	var subView = Alloy.createController([_args.controller], _args.args);
	DryIce.appContext.content.remove(_args.context[_args.removeMe]);
	DryIce.appContext.content.add(subView.getView([_args.view]));
};

exports.loadSubView = loadSubView;