// let titulo = document.querySelector('#titulo');
// let title = document.getElementById('title');
/* <i class='bx bxs-sun'></i> */

let btn = document.getElementById('btnMode');
let imagen = document.getElementById('image');

let btnPc = document.getElementById('btnOn');
let pc = document.getElementById('pcMac');

let bulb = document.getElementById('bulb');
let btnBulb = document.getElementById('btnBul');

let box = document.querySelector('.box');

let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');

let mode = true;
let btnModePc = true;
let btnModeBulb = true;


btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (mode) {
        btn.innerHTML = "<i class='bx bxs-sun'></i>Mode";
        btn.style.color = 'yellow';
        imagen.src = 'img/Switches-bro.svg';
    } else {
        btn.innerHTML = "<i class='bx bxs-moon'></i></i>Mode";
        btn.style.color = 'black';
        imagen.src = 'img/Switches-broMo.svg';
    }
    mode = !mode
})

btnPc.addEventListener('click', () => {
    if (btnModePc) {
        btnPc.src = 'img/off2.png';
        pc.src = 'img/pcOn.png';

    } else {
        btnPc.src = 'img/on2.png';
        pc.src = 'img/pcOff.png';
    }
    btnModePc = !btnModePc
})

btnBulb.addEventListener('click', () => {
    if (btnModeBulb) {
        bulb.src = 'img/bulbOn.png';
        btnBulb.src = 'img/off2.png';
    } else {
        bulb.src = 'img/bulbOff.png';
        btnBulb.src = 'img/on2.png';
    }
    btnModeBulb = !btnModeBulb
})

red.addEventListener('click', () => {
    red.style.color = 'red'
    box.style.background = 'red';
})

blue.addEventListener('click', () => {
    blue.style.color = 'blue'
    box.style.background = 'blue';
})

yellow.addEventListener('click', () => {
    yellow.style.color = 'yellow'
    box.style.background = 'yellow'
})

