let userForm = document.getElementById("userForm");
let username = document.getElementById("nameInput");
let role = document.getElementById("roleInput");
let bio = document.getElementById("bioInput");
let photo = document.getElementById("photoInput");
const cardsContainer = document.getElementById("cardsContainer");

// Wait for DOM to be fully loaded before initializing
document.addEventListener("DOMContentLoaded", function () {
  userManager.init();
});

const userManager = {
  users: [],
  init: function () {
    userForm.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    console.log("Form Submitted");
    console.log("Clearing Form");
    userForm.reset();

    this.renderUI();
  },
  renderUI: function () {
    cardsContainer.innerHTML = ""; //this statement removes any content from innerHTML to prevent double rendering of cards
    this.users.forEach((user) => {
      let userCardDIV = document.createElement("div");
      userCardDIV.classList.add("user-card");

      userCardDIV.innerHTML = `
                <img src="${user.photo}" alt="${user.username} photo" />
                <h3>${user.username}</h3>
                <div class="role">${user.role}</div>
                <p>${user.bio}</p>
            `;
      cardsContainer.appendChild(userCardDIV);
    });
  },
};

// // Form
// const userForm = document.getElementById("userForm");

// // Inputs
// const nameInput = document.getElementById("nameInput");
// const roleInput = document.getElementById("roleInput");
// const bioInput = document.getElementById("bioInput");
// const photoInput = document.getElementById("photoInput");

// // Cards container
// const cardsContainer = document.getElementById("cardsContainer");

// userForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const userInfo = {
//         name: nameInput.value,
//         role: roleInput.value,
//         bio: bioInput.value,
//         photo: photoInput.value
//     };
//     createCard(userInfo);
//     userForm.reset();
// })

// function createCard(info){
//     let userCardDIV = document.createElement('div');
//     userCardDIV.classList.add('user-card');

//     userCardDIV.innerHTML = `
//         <img src="${info.photo}" alt="${info.name} photo" />
//         <h3>${info.name}</h3>
//         <div class="role">${info.role}</div>
//         <p>${info.bio}</p>
//     `;

//     cardsContainer.appendChild(userCardDIV);
// }
