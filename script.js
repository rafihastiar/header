let toggle = document.querySelector('.menu-toggle input');
let nav = document.querySelector('nav ul');

toggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})