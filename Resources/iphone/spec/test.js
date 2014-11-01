var should = require("../should");

module.exports = function(DriIce, win) {
    describe("DryIce", function() {
        it("exists", function() {
            should.exist(DryIce);
        });
        it("should have resources and utils", function() {
            DryIce.should.have.property("resources");
            DryIce.should.have.property("utils");
        });
    });
    describe("index", function() {
        it("exists", function() {
            should.exist(win);
        });
    });
    mocha.run();
};