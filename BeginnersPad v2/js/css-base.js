// Nav menu toggle
let navToggle = document.getElementById('navToggle');
let navMenu = document.getElementById('navMenu');

navToggle.onclick = function(){
    if(navMenu.classList.contains('open')){
        navMenu.classList.remove('open');
    } else {
        navMenu.classList.add('open');
    }
};