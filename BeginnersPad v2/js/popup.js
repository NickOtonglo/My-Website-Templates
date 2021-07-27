let popupDemo = document.getElementById('popupDemo');
let pageFiller = document.getElementById('pageFiller');
let popupToggle = document.getElementById('popupToggle');
let popupClose = document.getElementById('popupClose');
let body = document.body;

popupToggle.onclick = function(){
    popupDemo.classList.remove('closed');
    body.classList.add('unfocused');
    pageFiller.classList.add('filler');
};

popupClose.onclick = function(){
    popupDemo.classList.add('closed');
    body.classList.remove('unfocused');
    pageFiller.classList.remove('filler');
}

pageFiller.onclick = function(){
    popupDemo.classList.add('closed');
    body.classList.remove('unfocused');
    pageFiller.classList.remove('filler');
    console.log('clicked');
}