"use strict"

function factorial(n) {
    
    let mult = 1;
    for (let i = n; i > 1; i--) {
       mult*=i;
       
    }
    return mult;
}


console.log(factorial(4));