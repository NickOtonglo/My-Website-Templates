// 'admin/manage-account.html'
let fname,lname,email,telephone,username,user_type,password;
let grpNames,grpEmail,grpPhone,grpUname,grpAccount,grpPass;

hideDetailsAlerts();

function init() {
    // hideDetailsAlerts();
    if (document.querySelector('#fname')){
        fname = document.querySelector('#fname');
        grpNames = document.querySelector('#grpNames');
        if (fname.value.trim() == ""){
            setError(grpNames);
        }
    }

    if (document.querySelector('#lname')){
        lname = document.querySelector('#lname');
        grpNames = document.querySelector('#grpNames');
        if (lname.value.trim() == ""){
            setError(grpNames);
        }
    }

    if (document.querySelector('#email')){
        email = document.querySelector('#email');
        grpEmail = document.querySelector('#grpEmail');
        if (email.value.trim() == ""){
            setError(grpEmail);
        }
    }

    if (document.querySelector('#telephone')){
        telephone = document.querySelector('#telephone');
        grpPhone = document.querySelector('#grpPhone');
        if (telephone.value.trim() == ""){
            setError(grpPhone);
        }
    }

    if (document.querySelector('#username')){
        username = document.querySelector('#username');
        grpUname = document.querySelector('#grpUname');
        if (username.value.trim() == ""){
            setError(grpUname);
        }
    }

    if (document.querySelector('#user_type')){
        user_type = document.querySelector('#user_type');
        grpAccount = document.querySelector('#grpAccount');
        if (user_type.value.trim() == ""){
            setError(grpAccount);
        }
    }
    
    if (document.querySelector('#password')){
        password = document.querySelector('#password');
        grpPass = document.querySelector('#grpPass');
        if (password.value.trim() == ""){
            setError(grpPass);
        }
    }
}

function hideDetailsAlerts(){
    document.querySelector('#fname').addEventListener('input', function (){
        removeError(grpNames);
    });
    document.querySelector('#lname').addEventListener('input', function (){
        removeError(grpNames);
    });
    document.querySelector('#email').addEventListener('input', function (){
        removeError(grpEmail);
    });
    document.querySelector('#telephone').addEventListener('input', function (){
        removeError(grpPhone);
    });
    document.querySelector('#username').addEventListener('input', function (){
        removeError(grpUname);
    });
    document.querySelector('#user_type').addEventListener('input', function (){
        removeError(grpAccount);
    });
    document.querySelector('#password').addEventListener('input', function (){
        removeError(grpPass);
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

