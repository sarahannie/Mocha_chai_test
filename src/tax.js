function tax(n) {
    //    0% tax from earning above  12000  in a year
    if (n <= 12000) {
      return 0;
    } 
    
    //    20% tax from earning above  12000  and below 36000 in a year
    else if (n > 12000 && n <= 36000) {
      return 0.2 * n;
    } 
        //    40% tax from earning above  360000 in a year
    else if (n > 36000) {
      return 0.4 * n;
    }

   return n
  }
  




module.exports = tax;