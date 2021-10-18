// 'admin/manage-account.html'
let unitName,price,deposit,depAmt,floor,description,features,disclaimer;
let grpName,grpPrice,grpDeposit,grpDepAmt,grpFloor,grpDescription,grpFeatures,grpDisclaimer;

hideDetailsAlerts();

function initUnit() {
    if (document.querySelector('#name')){
        unitName = document.querySelector('#name');
        grpName = document.querySelector('#grpName');
        if (unitName.value.trim() == ""){
            setError(grpName);
        }
    }
    if (document.querySelector('#price')){
        price = document.querySelector('#price');
        grpPrice = document.querySelector('#grpPrice');
        if (price.value.trim() == ""){
            setError(grpPrice);
        }
    }
    if (document.querySelector('#deposit')){
        deposit = document.querySelector('#deposit');
        grpDeposit = document.querySelector('#grpDeposit');
        if (deposit.value.trim() == ""){
            setError(grpDeposit);
        }
    }
    if (document.querySelector('#depAmt')){
        depAmt = document.querySelector('#depAmt');
        grpDepAmt = document.querySelector('#grpDepAmt');
        if (depAmt.value.trim() == ""){
            setError(grpDepAmt);
        }
    }
    if (document.querySelector('#floor')){
        floor = document.querySelector('#floor');
        grpFloor = document.querySelector('#grpFloor');
        if (floor.value.trim() == ""){
            setError(grpFloor);
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

function initDisclaimer(){
    if (document.querySelector('#disclaimer')){
        disclaimer = document.querySelector('#disclaimer');
        grpDisclaimer = document.querySelector('#grpDisclaimer');
        if (disclaimer.value.trim() == ""){
            setError(grpDisclaimer);
        }
    }
}

function hideDetailsAlerts(){
    document.querySelector('#name').addEventListener('input', function (){
        removeError(grpName);
    });
    document.querySelector('#price').addEventListener('input', function (){
        removeError(grpPrice);
    });
    document.querySelector('#deposit').addEventListener('input', function (){
        removeError(grpDeposit);
    });
    document.querySelector('#depAmt').addEventListener('input', function (){
        removeError(grpDepAmt);
    });
    document.querySelector('#floor').addEventListener('input', function (){
        removeError(grpFloor);
    });
    document.querySelector('#description').addEventListener('input', function (){
        removeError(grpDescription);
    });
    document.querySelector('#features').addEventListener('input', function (){
        removeError(grpFeatures);
    });
    document.querySelector('#disclaimer').addEventListener('input', function (){
        removeError(grpDisclaimer);
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
