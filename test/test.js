const assert = require("chai").assert;
const factorial = require("../src/factorial");
const multiply = require("../src/multiply");
const fibonacci = require("../src/fibonacci");
const tax = require("../src/tax")

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

describe(" Factorial() ", function () {
    it (" factorial(6)=720", function () {
        assert.equal(factorial(6),720)
    })
})

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

describe(" tax() ", function () {

     //    0% tax from earning above  12000  in a year
    it (" Earning < 12000 = 0", function () {
        assert.equal(tax(10000),0)
    })

    it(" Earning == 12000 = 0", function() {
        assert.equal(tax(12000), 0);
      });

      //    20% tax from earning above  12000  and below 36000 in a year

    it(" Earning > 12000 = 2600 ", function() {
        assert.equal(tax(13000), 2600);
      });

    it(" Earning == 20000 = 4000", function() {
        assert.equal(tax(20000), 4000);
      });

    it(" Earning == 36000 = 7200", function() {
        assert.equal(tax(36000), 7200);
      });

    //    40% tax from earning above  360000 in a year

    it(" Earning > 36000 = 7200", function() {
        assert.equal(tax(40000), 16000);
      });


})



