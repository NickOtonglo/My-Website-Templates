// 'admin/manage-account.html'
let title,description,priority;
let grpTitle,grpDescription,grpPriority;

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

    if (document.querySelector('#priority')){
        priority = document.querySelector('#priority');
        grpPriority = document.querySelector('#grpPriority');
        if (priority.value.trim() == ""){
            setError(grpPriority);
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
    document.querySelector('#priority').addEventListener('input', function (){
        removeError(grpPriority);
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

