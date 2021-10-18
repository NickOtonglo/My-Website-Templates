let modalTrigger1,modal1,modalHeaderClose1,modalFooterClose1,
    modalTrigger2,modal2,modalHeaderClose2,modalFooterClose2,
    modalTrigger3,modal3,modalHeaderClose3,modalFooterClose3;

if (document.getElementById('modalTrigger1')){
    modalTrigger1 = document.getElementById('modalTrigger1');
    modal1 = document.getElementById('modal1');
    modalFooterClose1 = document.getElementById('modalFooterClose1');
    modalHeaderClose1 = document.getElementById('modalHeaderClose1');
    pageFiller = document.getElementById('pageFiller');
    modalTrigger1.onclick = function(){
        toggleModal1();
    }
    pageFiller.onclick = function(){
        closePageFiller();
    }
    modalHeaderClose1.onclick = function(){
        toggleModal1();
    }
    modalFooterClose1.onclick = function(){
        toggleModal1();
    }
}

if (document.getElementById('modalTrigger2')){
    modalTrigger2 = document.getElementById('modalTrigger2');
    modal2 = document.getElementById('modal2');
    modalFooterClose2 = document.getElementById('modalFooterClose2');
    modalHeaderClose2 = document.getElementById('modalHeaderClose2');
    pageFiller = document.getElementById('pageFiller');
    modalTrigger2.onclick = function(){
        toggleModal2();
    }
    pageFiller.onclick = function(){
        closePageFiller();
    }
    modalHeaderClose2.onclick = function(){
        toggleModal2();
    }
    modalFooterClose2.onclick = function(){
        toggleModal2();
    }
}

if (document.getElementById('modalTrigger3')){
    modalTrigger3 = document.getElementById('modalTrigger3');
    modal3 = document.getElementById('modal3');
    modalFooterClose3 = document.getElementById('modalFooterClose3');
    modalHeaderClose3 = document.getElementById('modalHeaderClose3');
    pageFiller = document.getElementById('pageFiller');
    modalTrigger3.onclick = function(){
        toggleModal3();
    }
    pageFiller.onclick = function(){
        closePageFiller();
    }
    modalHeaderClose3.onclick = function(){
        toggleModal3();
    }
    modalFooterClose3.onclick = function(){
        toggleModal3();
    }
}

function toggleModal1() {
    if(modal1.classList.contains('open')){
        modal1.classList.remove('open');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    } else {
        modal1.classList.add('open');
        body.classList.add('unfocused');
        pageFiller.classList.add('filler');
    }
}

function toggleModal2() {
    if(modal2.classList.contains('open')){
        modal2.classList.remove('open');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    } else {
        modal2.classList.add('open');
        body.classList.add('unfocused');
        pageFiller.classList.add('filler');
    }
}

function toggleModal3() {
    if(modal3.classList.contains('open')){
        modal3.classList.remove('open');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    } else {
        modal3.classList.add('open');
        body.classList.add('unfocused');
        pageFiller.classList.add('filler');
    }
}

function closePageFiller(){
    if(document.querySelector('#navDrawer') && !document.querySelector('#navDrawer').classList.contains('closed')){
        pageFiller.classList.remove('filler');
        body.classList.remove('unfocused');
        document.querySelector('#navDrawer').classList.add('closed');
    } else if(document.querySelector('#modal1') && document.querySelector('#modal1').classList.contains('open')){
        modal1.classList.remove('open');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    } else if(document.querySelector('#modal2') && document.querySelector('#modal2').classList.contains('open')){
        modal2.classList.remove('open');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    } else if(document.querySelector('#modal3') && document.querySelector('#modal3').classList.contains('open')){
        modal3.classList.remove('open');
        body.classList.remove('unfocused');
        pageFiller.classList.remove('filler');
    }
}