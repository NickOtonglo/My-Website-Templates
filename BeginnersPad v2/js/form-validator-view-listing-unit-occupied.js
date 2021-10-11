let description,rating;
let grpDescription,grpRating;

hideDetailsAlerts();

function init() {
    if (document.querySelector('#description')){
        description = document.querySelector('#description');
        grpDescription = document.querySelector('#grpDescription');
        if (description.value.trim() == ""){
            setError(grpDescription);
        }
    }

    if (document.querySelector('#rating')){
        rating = document.querySelector('#rating');
        grpRating = document.querySelector('#grpRating');
        if (rating.value.trim() == ""){
            setError(grpRating);
        }
    }
}

function hideDetailsAlerts(){
    document.querySelector('#description').addEventListener('input', function (){
        removeError(grpDescription);
    });
    document.querySelector('#rating').addEventListener('input', function (){
        removeError(grpRating);
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
