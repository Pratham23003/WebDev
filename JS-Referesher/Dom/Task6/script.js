let nameData = document.getElementById('Name');
let ageData = document.getElementById('Age');
let emailData = document.getElementById('Email');
let fileData = document.getElementById('File');
const submitBtn = document.getElementById('submit-btn');
const cardContainer = document.querySelector('.card-display');
const formContainer = document.querySelector('.form-container');
let cardUsername = document.getElementById('user-name');
let cardAge = document.getElementById('user-age');
let cardEmail = document.getElementById('user-email');
let cardProfile = document.getElementById('user-profile');

submitBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    changeState(nameData, ageData, emailData, fileData); //changes the card state
    changePhoto(fileData);
    console.log("State Changed, Photo Changed");
});

function changeState(){
    formContainer.style.display = "none";
    cardContainer.style.display = "block";
    cardUsername.textContent = nameData.value;
    cardAge.textContent = ageData.value;
    cardEmail.textContent = emailData.value;
}