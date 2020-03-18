'use strict';
const body=document.querySelector('body');
var letra;
body.addEventListener('keydown',(event)=>{
    letra=event.keyCode;  
    console.log(letra);  
    if ( letra==82){
        body.classList.add('red');
        body.classList.remove('purple');
    }
    else if(letra==77){
        body.classList.add('purple');
        body.classList.remove('red');
    }
})
