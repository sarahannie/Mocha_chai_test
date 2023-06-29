const assert = require("chai").assert;
const factorial = require("../src/factorial");

describe(" Factorial() ", function () {
    it (" factorial(6)=720", function () {
        assert.equal(factorial(6),720)
    })
})