let divEl = document.getElementById('content');
let buttonEl = document.getElementById('change-button');
let clearEl = document.getElementById('clear-button');
let mainEl = document.getElementById('main');
let resetEl = document.getElementById('reset-button');

buttonEl.addEventListener('click', function () {
    console.log('Button has toggeled');
    divEl.classList.toggle('blue');

    mainEl.classList.toggle('night-theme');
})

clearEl.addEventListener('click', function () {
    console.log('Cleared!');
    divEl.innerText = '';
})

resetEl.addEventListener('click', function () {
    console.log('Reset text.');
    divEl.innerHTML = 'Hello . This is programming hero GitHub Testing';
})