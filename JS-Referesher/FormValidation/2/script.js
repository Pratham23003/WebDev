let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');
let strengthBar = document.getElementById('strength-bar');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
console.log('script runnung');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let emailValid = emailValidation();
    if(emailValid === true){
        console.log('[DEV]Email Valid');    
    }
    else{
        console.log("[DEV] email invalid.");
        emailError.textContent = `Invalid Email`;
    }
    
    let passValid = passwordValidation();
    if(passValid === true){
        console.log('[DEV]Password Valid');
    }
    else{
        console.log('[DEV]Password Invalid');
        passwordError.textContent = `Invalid Password`;
    }
    
    strengthBar.style.width = password.value.length + "%";
});
function emailValidation(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.value);
}
function passwordValidation(){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password.value);
}