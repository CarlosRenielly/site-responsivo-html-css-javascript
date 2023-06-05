let menu = document.querySelector('nav ul');
let menuBar = document.querySelector('nav .menu-icons');
let iconMenu = document.querySelector('nav .menu-icons img');

menuBar.addEventListener('click',function(){

   menu.classList.toggle('active');
});