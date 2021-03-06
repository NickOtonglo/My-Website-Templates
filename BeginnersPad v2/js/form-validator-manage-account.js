// 'admin/manage-account.html'
let fname,lname,email,telephone,username,user_type,password,passwordOld,passwordNew,passwordConf,helpCategory,description;
let grpNames,grpEmail,grpPhone,grpUname,grpAccount,grpPass,grpOldPass,grpNewPass,grpConfPass,grpHelpCategory,grpDescription;

hideDetailsAlerts();

function initAccount() {
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
}

function initPassword(){
    if (document.querySelector('#password_old')){
        passwordOld = document.querySelector('#password_old');
        grpOldPass = document.querySelector('#grpOldPass');
        if (passwordOld.value.trim() == ""){
            setError(grpOldPass);
        }
    }
    
    if (document.querySelector('#password_new')){
        passwordNew = document.querySelector('#password_new');
        grpNewPass = document.querySelector('#grpNewPass');
        if (passwordNew.value.trim() == ""){
            setError(grpNewPass);
        }
    }
    
    if (document.querySelector('#password_confirmation')){
        passwordConf = document.querySelector('#password_confirmation');
        grpConfPass = document.querySelector('#grpConfPass');
        if (passwordConf.value.trim() == ""){
            setError(grpConfPass);
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
    document.querySelector('#password_old').addEventListener('input', function (){
        removeError(grpOldPass);
    });
    document.querySelector('#password_new').addEventListener('input', function (){
        removeError(grpNewPass);
    });
    document.querySelector('#password_confirmation').addEventListener('input', function (){
        removeError(grpConfPass);
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
