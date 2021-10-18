// 'admin/manage-account.html'
let listingName,unitName,deposit;
let grpName,grpName2,grpDeposit;

hideDetailsAlerts();

function initListing() {
    if (document.querySelector('#name')){
        listingName = document.querySelector('#name');
        grpName = document.querySelector('#grpName');
        if (listingName.value.trim() == ""){
            setError(grpName);
        }
    }
    if (document.querySelector('#description')){
        description = document.querySelector('#description');
        grpDescription = document.querySelector('#grpDescription');
        if (description.value.trim() == ""){
            setError(grpDescription);
        }
    }
}

function initFeatures(){
    if (document.querySelector('#features')){
        features = document.querySelector('#features');
        grpFeatures = document.querySelector('#grpFeatures');
        if (features.value.trim() == ""){
            setError(grpFeatures);
        }
    }
}

function initUnit(){
    if (document.querySelector('#unitName')){
        unitName = document.querySelector('#unitName');
        grpName2 = document.querySelector('#grpName2');
        if (unitName.value.trim() == ""){
            setError(grpName2);
        } else {
            window.location.href = '/lister/manage-listing-unit.html';
        }
    }
}

function hideDetailsAlerts(){
    document.querySelector('#name').addEventListener('input', function (){
        removeError(grpName);
    });
    document.querySelector('#description').addEventListener('input', function (){
        removeError(grpDescription);
    });
    document.querySelector('#features').addEventListener('input', function (){
        removeError(grpFeatures);
    });
    document.querySelector('#unitName').addEventListener('input', function (){
        removeError(grpName2);
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
