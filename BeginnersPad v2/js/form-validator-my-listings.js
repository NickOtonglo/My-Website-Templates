// 'admin/manage-account.html'
let listingName;
let grpName;

hideDetailsAlerts();

function init() {
    if (document.querySelector('#name')){
        listingName = document.querySelector('#name');
        grpName = document.querySelector('#grpName');
        if (listingName.value.trim() == ""){
            setError(grpName);
        } else {
            window.location.href = '/lister/manage-listing.html';
        }
    }
}

function hideDetailsAlerts(){
    document.querySelector('#name').addEventListener('input', function (){
        removeError(grpName);
    });
}

function setError(element){
    if(!element.classList.contains('danger')){
        element.classList.add('danger');
    }
}

function removeError(element){
    if(element.classList.contains('danger')){
        element.classList.remove('danger');
    }
}
