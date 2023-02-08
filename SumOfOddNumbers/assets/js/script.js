"use strict"


let nums=[12,7,1,17,15,10,20,3]

function sumOfOddNumbers(arr){

    let sum=0;
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]%2!=0){
        sum+=arr[i];
       }
        
    }
    return sum;
}

let result=sumOfOddNumbers(nums);

console.log(result);