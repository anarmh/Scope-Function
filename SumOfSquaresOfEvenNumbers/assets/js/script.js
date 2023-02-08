"use scrict";


let nums= [1,2,3,4,5,6,7];

function sumOfSquaresOfEvenNumbers(arr){
    let mult=1;
    let sum=0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            mult=arr[i]*arr[i];
            sum+=mult;
        }
       
    }
    return sum;
}

console.log( sumOfSquaresOfEvenNumbers(nums))