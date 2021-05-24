let toggle = document.getElementById('nav-toggle');
let navDrawer = document.getElementById('nav-drawer');
let sectionMain = document.getElementById('section-main');
let body = document.body;

toggle.onclick = function(){
    if(navDrawer.classList.contains('nav-open')){
        navDrawer.classList.remove('nav-open');
        sectionMain.classList.remove('nav-open');
    } else {
        navDrawer.classList.add('nav-open');
        sectionMain.classList.add('nav-open');
    }
}
