'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.clicked');
button.addEventListener('click', ()=>{    
    document.querySelector('div').innerHTML=`<ul><li id='uno'>${inception}</li><li id='dos'>${theButterFlyEffect}</li><li id='tres'>${eternalSunshineOfTheSM}</li><li id='cuatro'>${blueVelvet}</li><li id='cinco'>${split}</li></ul>`;
    const primPeli=document.querySelector('#uno');
    const segunPeli=document.querySelector('#dos');
    const tercPeli=document.querySelector('#tres');
    const cuartPeli=document.querySelector('#cuatro');
    const quintPeli=document.querySelector('#cinco');
    primPeli.addEventListener('click',first);
    segunPeli.addEventListener('click',second);
    tercPeli.addEventListener('click',third);
    cuartPeli.addEventListener('click',fourth);
    quintPeli.addEventListener('click',fifth);
});
const first=()=> {
   alert(`${inception}`);      
 }
 const second=()=>{
    alert( `${theButterFlyEffect}`)
 }
 const third=()=>{
   alert( `${eternalSunshineOfTheSM}`)
 }
 const fourth=()=>{
     alert(`${blueVelvet}`);
 }
 const fifth=()=>{
    alert(`${split}`);
}

