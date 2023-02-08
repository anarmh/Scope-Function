"use scrict"

function login(mail,password){

    if(mail=="cavid@code.edu.az" && password=="12345"){
        console.log("Girish olundu");
    }
    else{
        console.log("Mail ve yaxud password sehvdir");
    }
}

login("cavid@code.edu.az",12345);