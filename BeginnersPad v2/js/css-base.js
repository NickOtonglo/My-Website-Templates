// Nav menu toggle
let navToggle = document.getElementById('navToggle');
let navMenu = document.getElementById('navMenu');
let btnDropGrp1,btn_dropdown_grp,listDropGrp1;

if (document.getElementById('btnDropGrp1')){
    btnDropGrp1 = document.getElementById('btnDropGrp1');
    listDropGrp1 = document.getElementById('listDropGrp1');
    // console.log('exists');
} else {
    // console.log('!exists');
}

navToggle.onclick = function(){
    if(navMenu.classList.contains('open')){
        navMenu.classList.remove('open');
    } else if(navMenu.classList.contains('authed')){
        navDrawer.classList.remove('closed');
        body.classList.add('unfocused');
        pageFiller.classList.add('filler');
    } else {
        navMenu.classList.add('open');
    }
};

btnDropGrp1.onclick = function(){
    if(listDropGrp1.classList.contains('open')){
        listDropGrp1.classList.remove('open');
    } else {
        listDropGrp1.classList.add('open');
    }
}

listDropGrp1.onclick = function(){
    if(listDropGrp1.classList.contains('open')){
        listDropGrp1.classList.remove('open');
    }
}