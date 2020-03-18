'use strict';
let param1,param2=0,param3=0,param4=0,anchoCont=0;

param1=parseInt(prompt("Ingrese 1 para border-box o 0 para content-box: "));
param2=parseInt(prompt("Ingrese ancho del content-box o border-box: "));
param3=parseInt(prompt("Ingrese el padding del content-box o border-box: "));
param4=parseInt(prompt("Ingrese el borde del content-box o border-box: "));
if(param1===1){
    param1=true;
}
else if(param1===0){
    param1=false;
}

if(param1===true && param2>=0 && param3>=0 && param4>=0){
    //border(param2,param3,param4);
    const printAnchoBord=(widht,paddig,border)=>{
        return `El ancho es: ${((widht-(2*paddig+2*border))+2*paddig+2*border)} px`;
    };
    console.log(printAnchoBord(param2,param3,param3));
}
else if(param1===false && param2>=0 && param3>=0 && param4>=0){
    const printAnchoCont=(widht,paddig,border)=>{
        return `El ancho es: ${(widht+2*paddig+2*border)} px`;
    };
    console.log(printAnchoCont(param2,param3,param3));
    }
else{
    console.log('Valor ingresado no valido'); 
}

/*function content(widht,paddig,border){
    
}
function margin(widht,paddig,border){
    
}*/