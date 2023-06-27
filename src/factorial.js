function factorial (a){
    let number =1;
    for(let i = 1; i<= a; i++){
        number *= i;
        console.log(number)
    }
    return number;
}

module.exports = factorial;