let zoneName,role,latitude,longitude,radius,timezone;
let grpName,grpRole,grpLat,grpLong,grpRadius,grpTimezone;

hideDetailsAlerts();

function init() {
    if (document.querySelector('#name')){
        zoneName = document.querySelector('#name');
        grpName = document.querySelector('#grpName');
        if (zoneName.value.trim() == ""){
            setError(grpName);
        }
    }

    if (document.querySelector('#role')){
        role = document.querySelector('#role');
        grpRole = document.querySelector('#grpRole');
        if (role.value.trim() == ""){
            setError(grpRole);
        }
    }

    if (document.querySelector('#county')){
        county = document.querySelector('#county');
        grpCounty = document.querySelector('#grpCounty');
        if (county.value.trim() == ""){
            setError(grpCounty);
        }
    }

    // if (document.querySelector('#latitude')){
    //     latitude = document.querySelector('#latitude');
    //     grpLat = document.querySelector('#grpLat');
    //     if (latitude.value.trim() == ""){
    //         setError(grpLat);
    //     }
    // }

    // if (document.querySelector('#longitude')){
    //     longitude = document.querySelector('#longitude');
    //     grpLong = document.querySelector('#grpLong');
    //     if (longitude.value.trim() == ""){
    //         setError(grpLong);
    //     }
    // }
    
    // if (document.querySelector('#radius')){
    //     radius = document.querySelector('#radius');
    //     grpRadius = document.querySelector('#grpRadius');
    //     if (radius.value.trim() == ""){
    //         setError(grpRadius);
    //     }
    // }
    
    // if (document.querySelector('#timezone')){
    //     timezone = document.querySelector('#timezone');
    //     grpTimezone = document.querySelector('#grpTimezone');
    //     if (timezone.value.trim() == ""){
    //         setError(grpTimezone);
    //     }
    // }
}

function hideDetailsAlerts(){
    document.querySelector('#name').addEventListener('input', function (){
        removeError(grpName);
    });
    document.querySelector('#role').addEventListener('input', function (){
        removeError(grpRole);
    });
    document.querySelector('#latitude').addEventListener('input', function (){
        removeError(grpLat);
    });
    document.querySelector('#longitude').addEventListener('input', function (){
        removeError(grpLong);
    });
    document.querySelector('#radius').addEventListener('input', function (){
        removeError(grpRadius);
    });
    document.querySelector('#timezone').addEventListener('input', function (){
        removeError(grpTimezone);
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