'use strict';
let num1=0,num2=0,num3=0,num4=0;
num1=parseInt(prompt("Ingrese el primer número: "));
num2=parseInt(prompt("Ingrese el segundo número: ")); 
num3=parseInt(prompt("Ingrese el tercer número: "));
num4=parseInt(prompt("Ingrese el cuarto número: ")); 

if((num1 <=0 || num1>0) && (num2 <=0 || num2>0) && (num3 <=0 || num3>0) && (num4 <=0 || num4>0)){
console.log('La media es: '+ media(num1,num2,num3,num4));
}
else{
    console.log('Valor igresado no valido'); 
}

function media(num1,num2,num3,num4){
    const result=((num1+num2+num3+num4)/4);
    return result;
    }