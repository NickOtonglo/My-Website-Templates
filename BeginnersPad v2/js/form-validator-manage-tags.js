// 'admin/manage-account.html'
let title,description;
let grpTitle,grpDescription;

hideDetailsAlerts();

function init() {
    // hideDetailsAlerts();
    if (document.querySelector('#title')){
        title = document.querySelector('#title');
        grpTitle = document.querySelector('#grpTitle');
        if (title.value.trim() == ""){
            setError(grpTitle);
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

function hideDetailsAlerts(){
    document.querySelector('#title').addEventListener('input', function (){
        removeError(grpTitle);
    });
    document.querySelector('#description').addEventListener('input', function (){
        removeError(grpDescription);
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

