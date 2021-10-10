// 'admin/manage-account.html'
let title,description,category;
let grpTitle,grpDescription,grpCategory;

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

    if (document.querySelector('#category')){
        category = document.querySelector('#category');
        grpCategory = document.querySelector('#grpCategory');
        if (category.value.trim() == ""){
            setError(grpCategory);
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
    document.querySelector('#category').addEventListener('input', function (){
        removeError(grpCategory);
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

