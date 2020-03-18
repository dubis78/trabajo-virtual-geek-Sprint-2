'use strict';
let num1=0,num2=0;
num1=parseInt(prompt("Ingrese el primer número: "));
num2=parseInt(prompt("Ingrese el segundo número: ")); 

if((num1 <=0 || num1>0) && (num2 <=0 || num2>0)){
    const multipl=(num1,num2)=>{
    return (num1*num2);
};
console.log(multipl(num1,num2));
}
else{
    console.log('Valor ingresado no valido'); 
}
