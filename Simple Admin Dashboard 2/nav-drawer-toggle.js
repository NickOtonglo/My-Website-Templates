let navDrawer = document.getElementById('nav-drawer');
let toggle = document.getElementById('nav-toggle');
let sectionMain = document.getElementById('section-main');

toggle.onclick = function(){
    if(navDrawer.classList.contains('nav-open')){
        navDrawer.classList.remove('nav-open');
        sectionMain.classList.remove('nav-open');
    } else {
        navDrawer.classList.add('nav-open');
        sectionMain.classList.add('nav-open');
    }
}