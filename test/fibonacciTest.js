const assert = require("chai").assert;
const fibonacci = require("../src/fibonacci");


describe(" fibonacci() ", function () {

    it (" 1 = 1 ", function () {
        assert.equal(fibonacci(1),1)
    });
    it (" 2 = 1 ", function () {
        assert.equal(fibonacci(2),1)
    });
    it (" 3 = 2 ", function () {
        assert.equal(fibonacci(3),2)
    });
    it (" 4 = 3 ", function () {
        assert.equal(fibonacci(4),3)
    });
    it (" 5 = 5 ", function () {
        assert.equal(fibonacci(5),5)
    });
    it (" 6 = 8 ", function () {
        assert.equal(fibonacci(6),8)
    });
})