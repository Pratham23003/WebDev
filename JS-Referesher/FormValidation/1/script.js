const form = document.getElementById('form');
const smallName = document.getElementById('name-small');

const nm = document.getElementById('name');
const email = document.getElementById('mail');
const passwd = document.getElementById('password');
const gender = document.getElementById('gender-select');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    if(nm.value.length <= 2){
        smallName.style.display = 'initial';
        smallName.style.color = "red";  
    }
    else{
        smallName.style.display = "none";
    }
});