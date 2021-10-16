// 'admin/manage-account.html'
let unitName;
let grpName;

hideDetailsAlerts();

function init() {
    // hideDetailsAlerts();
    if (document.querySelector('#name')){
        unitName = document.querySelector('#name');
        grpName = document.querySelector('#grpName');
        if (unitName.value.trim() == ""){
            setError(grpName);
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
