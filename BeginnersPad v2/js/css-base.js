// Nav menu toggle
let navToggle = document.getElementById('navToggle');
let navMenu = document.getElementById('navMenu');

navToggle.onclick = function(){
    if(navMenu.classList.contains('open')){
        navMenu.classList.remove('open');
    } else if(navMenu.classList.contains('authed')){
        navDrawer.classList.remove('closed');
    } else {
        navMenu.classList.add('open');
    }
};