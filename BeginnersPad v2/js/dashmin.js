// DashMin
let dsmNavDrawer = document.getElementById('dsmNavDrawer');
let dsmNavDrawerToggle = document.getElementById('dsmNavDrawerToggle');
let dsmSectionMain = document.getElementById('dsmSectionMain');

dsmNavDrawerToggle.onclick = function(){
    if(dsmNavDrawer.classList.contains('nav-open')){
        dsmNavDrawer.classList.remove('nav-open');
        dsmSectionMain.classList.remove('nav-open');
    } else {
        dsmNavDrawer.classList.add('nav-open');
        dsmSectionMain.classList.add('nav-open');
    }
}