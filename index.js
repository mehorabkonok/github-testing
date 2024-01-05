let divEl = document.getElementById('content');
let buttonEl = document.getElementById('change-button');


buttonEl.addEventListener('click', function () {
    console.log('Button has toggeled');
    divEl.classList.toggle('red');
})