const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//showerror message
function showError(input,message){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small = input.nextElementSibling;
     small.innerText=message;
}
//show success message
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//Email Valid
function checkMail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,`${input.id} is not valid`);
    }
}
// Check if password lenths are equal or not
function checkPasswordCorrect(input,input2){

    if(input2.value !== input.value || input2.value==='' ){
        showError(input2,'Password doesn\'t match');
    }
    else
    {
        showSuccess(input2);
    }
}



//Check required field
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} Is Required`)
        }
        else{
            showSuccess(input);
        }
    });

}
//Check Length of Input - username and password here
function checkLength(input,min,max){
    long=input.value.length;
    if(long < min){
        showError(input,`Your need atleast ${min} character for your ${input.id}`);
    }
    else if(long>max){
        showError(input,`Your ${input.id} should not exceed ${max} character`);
    }
    else{
        showSuccess(input);
    }
}


//Capitalize the first alphabet of the input 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,12);
    checkLength(password,6,15);
    checkMail(email);
    checkPasswordCorrect(password,password2);
})
