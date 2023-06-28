function factorial (a){
    let number =1;
    for(let i = 1; i<= a; i++){
        number *= i;
    }
    return number;
}

module.exports = factorial;