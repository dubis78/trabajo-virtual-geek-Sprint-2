'use strict';
let price=0;

price=parseInt(prompt("Ingrese el precio: "));

if(price>0){
    calcu(price);
    }
else{
        console.log('Valor igresado no valido'); 
    }

function calcu(price){
    let iva=0,total=0;
    iva=price*.21;
    total=price+iva;
    console.log('Precio sin IVA: '+price+', IVA: '+iva+' y Total: '+total); 
}