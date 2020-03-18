'use strict';
const isra = document.querySelector('.isra');
const carlos = document.querySelector('.barlos');
const nasi = document.querySelector('.nasi');
isra.addEventListener('click', addRemov);
carlos.addEventListener('click', addRemov);
nasi.addEventListener('click', addRemov);
function addRemov(event) {
    const selecc = event.currentTarget;
    if (selecc.classList.contains('teacher--selected')) {
        selecc.classList.remove('teacher--selected');
        selecc.querySelector('.favorite').innerHTML = 'Añadir';
    } else {
        selecc.classList.add('teacher--selected');
        selecc.querySelector('.favorite').innerHTML = 'Quitar';
    }
}

