let openNavDrawer = document.getElementById('open-nav-drawer');
let closeNavDrawer = document.getElementById('close-nav-drawer');
let navDrawer = document.getElementById('nav-drawer');
let body = document.body;

openNavDrawer.onclick = function(){
    navDrawer.classList.remove('closed');
    body.classList.add('unfocused')
};

closeNavDrawer.onclick = function(){
    navDrawer.classList.add('closed');
    body.classList.remove('unfocused');
}