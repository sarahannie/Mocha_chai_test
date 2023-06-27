const assert = require("chai").assert;
const factorial = require("../src/factorial")
const multiply = require("../src/multiply")


describe('multiply', function(){

    it('1 * 1 = 1', function(){
        // assert is used inside
        assert.equal(multiply(1,1),1);

    })

    it("2 * 2 = 4", function () {
        assert.equal(multiply(2,2),4)
    })

    it("3 * 3 = 9", function() {
        assert.equal(multiply(3,3),9)
    })

    it("4 * 4 = 16", function () {
        assert.equal(multiply(4,4), 16)
    })

    it("23 * 45 = 1035", function () {
        assert.equal(multiply(23, 45),1035)
    })

})

describe(" Test last", function () {
    it (" 1 * 1 * 1", function () {
        assert.equal(factorial(6),720)
    })
})

