// function tax(e) {
//     let tax = 0;
  
//     if (e <= 12000) {
//       tax = 0;
//     } else if (e <= 36000) {
//       tax += 0.2 * (e - 12000);
//     } else if (e > 36000) {
//       tax += 0.4 * (e - 36000);
//     }
  
//     return tax;
//   }

function tax(e) {
   
    //    0% tax from earning less equal  12000  in a year
    if (e <= 12000) {
      tax = 0;
    } 
    
    //    20% tax from earning above  12000  and less equal 36000 in a year
    else if (e > 12000 && e <= 36000) {
      tax += 0.2 * (e - 12000);
    } 
        //    40% tax from earning above  36000 in a year
    else if (e > 36000) {
      tax += 0.4 * (e - 36000);
    }

   return tax;
  }
  




module.exports = tax;