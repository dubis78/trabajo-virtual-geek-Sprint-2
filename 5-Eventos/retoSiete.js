'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.clicked');
button.addEventListener('click',()=>{    
    document.querySelector('div').innerHTML=`<ul><li id='uno'>${inception}</li><li id='dos'>${theButterFlyEffect}</li><li id='tres'>${eternalSunshineOfTheSM}</li><li id='cuatro'>${blueVelvet}</li><li id='cinco'>${split}</li></ul>`;
    const ulList=document.querySelector('ul');
    const peli=event.target;
    ulList.addEventListener('click',()=>{
        alert( `${event.target.innerHTML}`);
        console.log(event.target);
    });
});
