var loadSubView = function(_args) {
    var subView = Alloy.createController([ _args.controller ], _args.args);
    DryIce.appContext.content.remove(_args.context[_args.removeMe]);
    DryIce.appContext.content.add(subView.getView([ _args.view ]));
};

exports.loadSubView = loadSubView;