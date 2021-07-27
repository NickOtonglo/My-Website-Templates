let navDrawerOpen = document.getElementById('navDrawerOpen');
let navDrawerClose = document.getElementById('navDrawerClose');
let navDrawer = document.getElementById('navDrawer');


navDrawerOpen.onclick = function(){
    if(popupDemo.classList.contains('closed')){
        navDrawer.classList.remove('closed');
        body.classList.add('unfocused');
        pageFiller.classList.add('filler');
    } else {
        navDrawer.classList.remove('closed');
    }
};

navDrawerClose.onclick = function(){
    if(popupDemo.classList.contains('closed')){
        navDrawer.classList.add('closed');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    } else {
        navDrawer.classList.add('closed');
    }
}

pageFiller.onclick = function(){
    if(popupDemo.classList.contains('closed')){
        navDrawer.classList.add('closed');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    } else {
        navDrawer.classList.add('closed');
    }
}