"use strict";

// let numbers = [1, 2, 3, 4, 5, "12", 6];
// for (let i = 0; i < numbers.length; i++) {
//   if (!isNaN(numbers[i]) && typeof numbers[i] == "number") {
//     console.log(numbers[i]);
//   }
// }

// let surname = true;

// if (typeof surname == "boolean") {
//   console.log("yes boolean");
// } else {
//   console.log("no boolean");
// }

// try {
//     let isMarried=true;
//     if(isMarried){
//         var result="Married"
//     }
//     document.querySelector("h1").innerText=result;
//     document.querySelector("h1").style.color="green";
// } catch (error) {
//     document.querySelector("h1").innerText=error.message;
//     document.querySelector("h1").style.color="red";
// }
// finally{
//     document.querySelector("h1").style.border="1px solid black";
// }

// let isMarried=false;
// if(true){
//     let name="evli"
//     if(!isMarried){
//         let text="not married"
//     }
// }
// console.log(isMarried)

// document.querySelector("button").addEventListener("click",function() {
//     if(document.querySelector("input").value.trim()==""){
//        document.querySelector("span").style.display= "block";
//     }
//     else{
//         document.querySelector("span").style.display= "none";
//     }
// })

// let name="Anar";
// function showText(name){
//     let surname="Huseynov"
//     console.log(surname+ " "+ name);
// }

// showText(name);

// let name="Anar";
// let surname="Huseynov";

// function showText(name,surname){

//     let isMarried=true;
//     if(isMarried){
//         return name + " "+ surname + " "+ isMarried+" siz qeydiyyat kece bilersiz";
//     }
//     else{
//         return name + " "+ surname + " "+ isMarried+" siz qeydiyyatdan kece bilmersiz";
//     }

// }

// let result=showText(name,surname);

// console.log(result);

// let endResult=result+ " "+ "p414 qrupunda oxuyur";

// console.log(endResult)

// function sumOfNumbers(){
//     console.log(arguments[6]);
// }

// sumOfNumbers(2,3,4,5,6,7,"Anar");

// console.log(this)
// function showFullData(){
//     console.log(this);
// }

// showFullData();

// let obj={
//     name:"Anar",
//     surname: "Huseynov",
//     getData :function(){
//         console.log(this);
//     }
// }

// obj.getData();

// let nums=[1,2,3,4,5,6,7,8,9,10];

// function showNums(arr){

//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]==5){
//        continue;

//        }
//        else{
//         console.log(arr[i]);

//        }

//     }
//     console.log("Anar")
// }
// showNums(nums);

// let showEmail = () => {
//   console.log(this);
// };

// // showEmail(1, 2, 3, 4, 5);

// let obj = {
//   name: "Anar",
//   surname: "Huseynov",
//   getData: showEmail()
//   }


//   obj.getData();

document.querySelector("button").addEventListener("click",function(){
    console.log(this)
})