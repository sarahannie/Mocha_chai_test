const assert = require("chai").assert;

function multiply(a, b) {
    return a*b
}

describe('multiply', function(){

    it('test 1', function(){
        // assert is used inside
        assert.equal(multiply(1,1),1);

    })

    it("test 2", function () {
        assert.equal(multiply(2,2),4)
    })

    it("test 3", function() {
        assert.equal(multiply(3,3),9)
    })

    it("test 4", function () {
        assert.equal(multiply(4,4), 16)
    })

    it("test 5", function () {
        assert.equal(multiply(5,5), 25)
    })

})

