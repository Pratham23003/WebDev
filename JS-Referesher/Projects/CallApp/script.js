const addContactBtn = document.getElementById("add-contact");
const callCardUI = document.getElementById("call-ui");
//DOM elements => FORM
const addContactForm = document.getElementById("form");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
// Text inputs
const imageUrlInput = document.querySelector("#form-input-url");
const fullNameInput = document.querySelector("#form-input-name");
const hometownInput = document.querySelector("#form-input-hometown");
const purposeInput = document.querySelector("#form-input-purpose");

// Category checkboxes
const categoryCheckboxes = document.querySelectorAll(
  '.category-options input[type="checkbox"]'
);

// Individual category tags (optional, if you want them separately)
const emergencyCheckbox = document.querySelector(".tag.emergency input");
const importantCheckbox = document.querySelector(".tag.important input");
const urgentCheckbox = document.querySelector(".tag.urgent input");
const noRushCheckbox = document.querySelector(".tag.norush input");

// Bttns
const createNoteBtn = document.querySelector("#createNote-btn");
const closeBtn = document.querySelector("#close-btn");
const formCloseBtn = document.getElementById("close-btn");

//array
// const tasks = [
//     {
//         userName: "John Doe",
//         homeTown: "Singapore",
//         bookings: 3,
//         priority: "important"
//     },
//     {
//         userName: "Balwinder Singh",
//         homeTown: "Kaneda",
//         bookings: 1,
//         priority: "no rush"
//     },
//     {
//         userName: "Vito Scaletta",
//         homeTown: "Italy",
//         bookings: 2,
//         priority: "urgent"
//     }
// ];

// localStorage fn
function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

addContactBtn.addEventListener("click", (e) => {
  addContactForm.style.display = "flex";
  callCardUI.style.display = "none";
});
formCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  callCardUI.style.display = "flex";
  addContactForm.style.display = "none";
});
createNoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValidation = validateInputs();
  if (inputValidation === true) {
    // Collect all selected categories
    const selectedCategories = Array.from(categoryCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    saveToLocalStorage({
      imageURL: imageUrlInput.value,
      fullName: fullNameInput.value,
      purpose: purposeInput.value,
      homeTown: hometownInput.value,
      selected: selectedCategories,
    });

    //clear the form
    addContactForm.style.display = "none";
    callCardUI.style.display = "flex";
    //clear form text
    addContactForm.reset();
  }
});
function validateInputs() {
  console.dir(imageUrlInput.value);

  // Validate all text inputs are not empty
  if (imageUrlInput.value.trim() === "") {
    alert("Please enter an image URL");
    return false;
  }

  if (fullNameInput.value.trim() === "") {
    alert("Please enter a full name");
    return false;
  }

  if (hometownInput.value.trim() === "") {
    alert("Please enter a hometown");
    return false;
  }

  if (purposeInput.value.trim() === "") {
    alert("Please enter a purpose");
    return false;
  }

  // Validate that at least one category is selected
  const isCategorySelected = Array.from(categoryCheckboxes).some(
    (checkbox) => checkbox.checked
  );
  if (!isCategorySelected) {
    alert("Please select at least one category");
    return false;
  }

  // If all validations pass
  return true;
}

//append card to the doc
function renderCards() {
  // Get or create cards container
  let cardsContainer = document.querySelector(".cards-container");
  if (!cardsContainer) {
    cardsContainer = document.createElement("div");
    cardsContainer.className = "cards-container";
    callCardUI.insertBefore(cardsContainer, callCardUI.querySelector(".status-dots"));
  }
  
  // Clear existing cards
  cardsContainer.innerHTML = '';
  
  // Get tasks from localStorage
  let allTasks = localStorage.getItem("tasks");
  
  // If no tasks exist, return early
  if (!allTasks) {
    return;
  }
  
  allTasks = JSON.parse(allTasks);

  allTasks.forEach((task) => {
    const callCard = document.createElement("div");
    callCard.className = "call-card";

    // Avatar
    const avatar = document.createElement("div");
    avatar.className = "avatar";

    const avatarImg = document.createElement("img");
    avatarImg.src = `${task.imageURL}`;
    avatarImg.alt = "User avatar";

    avatar.appendChild(avatarImg);

    // Info
    const info = document.createElement("div");
    info.className = "info";

    const name = document.createElement("h3");
    name.textContent = `${task.fullName}`;

    const infoContainer = document.createElement("div");
    infoContainer.className = "info-container";

    // Home town
    const homeTownP = document.createElement("p");
    homeTownP.textContent = "Home town ";

    const homeTownSpan = document.createElement("span");
    homeTownSpan.textContent = `${task.homeTown}`;

    homeTownP.appendChild(homeTownSpan);

    // Bookings
    const bookingsSmall = document.createElement("small");
    bookingsSmall.textContent = "Bookings ";

    const bookingsSpan = document.createElement("span");
    bookingsSpan.textContent = `${task.purpose}`;

    bookingsSmall.appendChild(bookingsSpan);

    // Append info container children
    infoContainer.appendChild(homeTownP);
    infoContainer.appendChild(bookingsSmall);

    // Append info children
    info.appendChild(name);
    info.appendChild(infoContainer);

    // Actions
    const actions = document.createElement("div");
    actions.className = "actions";

    // Call button
    const callBtn = document.createElement("button");
    callBtn.className = "call";

    const callIcon = document.createElement("i");
    callIcon.className = "fas fa-phone";

    callBtn.appendChild(callIcon);
    callBtn.append(" Call");

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.className = "msg";

    const msgIcon = document.createElement("i");
    msgIcon.className = "fas fa-message";

    msgBtn.appendChild(msgIcon);
    msgBtn.append(" Message");

    // Append buttons
    actions.appendChild(callBtn);
    actions.appendChild(msgBtn);

    // Assemble card
    callCard.appendChild(avatar);
    callCard.appendChild(info);
    callCard.appendChild(actions);

    // Append to cards container
    cardsContainer.appendChild(callCard);
  });
}
renderCards();

upBtn.addEventListener("click", () => {
  const cardsContainer = document.querySelector(".cards-container");
  const cards = Array.from(cardsContainer.querySelectorAll(".call-card"));
  
  if (cards.length <= 1) return;
  
  // Move first card to the end
  cardsContainer.appendChild(cards[0]);
});

downBtn.addEventListener("click", (e) => {
  const cardsContainer = document.querySelector(".cards-container");
  const cards = Array.from(cardsContainer.querySelectorAll(".call-card"));
  
  if (cards.length <= 1) return;
  
  // Move last card to the beginning
  cardsContainer.insertBefore(cards[cards.length - 1], cards[0]);
});