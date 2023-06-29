const assert = require("chai").assert;
const tax = require("../src/tax")

describe(" tax() ", function () {

    //    0% tax from earning less equal  12000  in a year
   it (" Earning < 12000 = 0", function () {
       assert.equal(tax(10000),0)
   })

   it(" Earning == 12000 = 0", function() {
       assert.equal(tax(12000), 0);
     });

     //    20% tax from earning above  12000  and less equal 36000 in a year

   it(" Earning > 12000 = 200 ", function() {
       assert.equal(tax(13000), 200);
     });

   it(" Earning == 20000 = 1800", function() {
       assert.equal(tax(20000), 1800);
     });

   it(" Earning == 36000 = 7200", function() {
       assert.equal(tax(36000), 6600);
     });

 //    40% tax from earning above  36000 in a year

   it(" Earning > 40000 = 8200", function() {
       assert.equal(tax(40000), 8200);
     });


})