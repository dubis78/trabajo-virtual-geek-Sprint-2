'use strict';
const button = document.querySelector('.clicked');
button.addEventListener('click', ()=>{       
   let name=document.querySelector('input') 
   console.log(`Hola ${name.value}`); 
});

    