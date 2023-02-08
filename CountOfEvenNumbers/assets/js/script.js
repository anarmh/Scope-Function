"use strict";

let nums=[20,12,3,7,27,10,15,28];

function countOfEvenNumbers(arr){

    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0)
        count++;
    }
    return count;
}


let result=countOfEvenNumbers(nums);
console.log(result);