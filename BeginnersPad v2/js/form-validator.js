// 'admin/manage-account.html'
let fname,lname,email,telephone,username,user_type,password;
let grpNames,grpEmail,grpPhone,grpUname,grpAccount,grpPass;

function init() {
    hideDetailsAlerts();
    if (document.getElementById('fname')){
        fname = document.getElementById('fname');
        grpNames = document.getElementById('grpNames');
        if (fname.value.trim() == ""){
            setError(grpNames);
        }
    }

    if (document.getElementById('lname')){
        lname = document.getElementById('lname');
        grpNames = document.getElementById('grpNames');
        if (lname.value.trim() == ""){
            setError(grpNames);
        }
    }

    if (document.getElementById('email')){
        email = document.getElementById('email');
        grpEmail = document.getElementById('grpEmail');
        if (email.value.trim() == ""){
            setError(grpEmail);
        }
    }

    if (document.getElementById('telephone')){
        telephone = document.getElementById('telephone');
        grpPhone = document.getElementById('grpPhone');
        if (telephone.value.trim() == ""){
            setError(grpPhone);
        }
    }

    if (document.getElementById('username')){
        username = document.getElementById('username');
        grpUname = document.getElementById('grpUname');
        if (username.value.trim() == ""){
            setError(grpUname);
        }
    }

    if (document.getElementById('user_type')){
        user_type = document.getElementById('user_type');
        grpAccount = document.getElementById('grpAccount');
        if (user_type.value.trim() == ""){
            setError(grpAccount);
        }
    }

    if (document.getElementById('password')){
        password = document.getElementById('password');
        grpPass = document.getElementById('grpPass');
        if (password.value.trim() == ""){
            setError(grpPass);
        }
    }
}

function hideDetailsAlerts(){
    $('#fname').on('input', function () {
        removeError(grpNames);
    });
    $('#lname').on('input', function () {
        removeError(grpNames);
    });
    $('#email').on('input', function () {
        removeError(grpEmail);
    });
    $('#telephone').on('input', function () {
        removeError(grpPhone);
    });
    $('#username').on('input', function () {
        removeError(grpUname);
    });
    $('#user_type').on('input', function () {
        removeError(grpAccount);
    });
    $('#password').on('input', function (e) {
        removeError(grpPass);
        $(this).val($(this).val().replace(/[|&;$%@"<>(){},]/g, ''));
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

