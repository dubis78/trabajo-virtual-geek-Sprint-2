'use strict';
let num1=0,num2=0;
num1=parseInt(prompt("Ingrese el primer número: "));
num2=parseInt(prompt("Ingrese el segundo número: ")); 

if((num1 <=0 || num1>0) && (num2 <=0 || num2>0)){
console.log(multipl(num1,num2));
}
else{
    console.log('Valor ingresado no valido'); 
}

function multipl(num1,num2){
    const result=(num1*num2);
    return result;
    }