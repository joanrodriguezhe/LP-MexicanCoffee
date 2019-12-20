let contactname = document.getElementById('contact_name');
let contactemail = document.getElementById('contact_email');
let contactphone = document.getElementById('contact_phone');
let contactmessage = document.getElementById('contact_message');

let validName = false;
let validEmail = false;
let validPhone = false;
let validMessage = false;

function nameValidator(){
    
    if(contactname.value == undefined || contactname.value == '' || contactname.value == null) {
        contactname.classList.add('is-invalid');
        errorname.hidden= false;
        validName = false;
       
    } else{
        errorname.hidden= true;
        contactname.classList.remove('is-invalid');
        validName = true;
    }
}

function emailValidate(){
    
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactemail.value)) {
        
        contactemail.classList.add('is-invalid');
        erroremail.hidden = false;
        validEmail = false;
       
    } else{
        erroremail.hidden= true;
        contactemail.classList.remove('is-invalid');
        validEmail=true;
    }
}

function numberValidator(){
    if(!/^[0-9]+$/.test(contactphone.value)){
      contactphone.classList.add('is-invalid')
      errorphone.hidden = false;
      validPhone = false;
      console.log('false');
    }else{
        errorphone.hidden = true;
        contactphone.classList.remove('is-invalid');
        validPhone = true;
        console.log('true');
    }
}

function messageValidator(){
    
    if(contactmessage.value == undefined || contactmessage.value == '' || contactmessage.value == null) {
        contactmessage.classList.add('is-invalid');
        errormessage.hidden= false;
        validMessage = false;
       
    } else{
        errormessage.hidden= true;
        contactmessage.classList.remove('is-invalid');
        validMessage = true;
    }
}


function showMessage() 
{
    if(validName && validEmail && validPhone && validMessage ){
        message = 'Name: ' + contactname.value + '\nEmail: '+contactemail.value+'\nPhone: '+contactphone.value+'\nMessage:' + contactmessage.value;

        alert(message);
    }
}