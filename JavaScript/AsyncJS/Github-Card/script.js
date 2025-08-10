//dom elements
const inputField = document.getElementById("input-bar");
const submitBtn = document.getElementById("submit-btn");
const inputSubmitContainer = document.getElementById("input-submit-container");
const cardContainer = document.getElementById("card-container");
const usernameDisplay = document.getElementById("user-name");
const githubCard = document.querySelector('.github-card');
const avatarDisplay = document.getElementById("avatar");
const bioText = document.getElementById("user-bio");
const numOfFollowers = document.getElementById("followers");
const numOfFollowing = document.getElementById("following");
const numOfRepos = document.getElementById("repos");
const locationText = document.getElementById("location");
const errorCardContainer = document.getElementById('card-error');

function getGithubData(username) {
  const requestURL = `https://api.github.com/users/${username}`;
  const xhrReq = new XMLHttpRequest();
  xhrReq.open("GET", requestURL); // send a GET request to the github api

  xhrReq.onreadystatechange = function () {
    console.log(xhrReq.readyState);
    console.log(xhrReq.status)
    
    if(xhrReq.status == '404'){
        errorCardContainer.style.display = "block";
        githubCard.style.display = "none";
        errorCardContainer.innerText = `${username} doesn't exist. Please enter a valid user name.`;
    }
    
    else if (xhrReq.readyState === 4) {
      //clear the space for git card to be displayed
      const errorContainer = document.querySelector('.error-card-container');
      errorContainer.remove();
      console.log(document);

      console.log(xhrReq.readyState);
      console.log(xhrReq.status);
      const data = JSON.parse(this.responseText);

      console.log(`${typeof data} is returned`);
      console.log(data.login);

      //dom update
      usernameDisplay.innerText = `${data.login}`;
      avatarDisplay.src = `${data.avatar_url}`;
      numOfFollowers.textContent = `${data.followers}`;
      numOfFollowing.textContent = `${data.following}`;
      numOfRepos.textContent = `${data.public_repos}`;
      //if bio doesnt exists
      if (data.bio === null) {
        bioText.textContent = `User doesn't have a bio.`;
      } else {
        bioText.textContent = `${data.bio}`;
      }
      locationText.textContent = `${data.location}`;
    }
  };
  xhrReq.send();
}

//input handler
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = inputField.value;

  if (username){
    //switch screens
    inputSubmitContainer.style.display = "none";
    cardContainer.style.display = "flex";

    getGithubData(username);
  }
  else{
    alert("Please enter a valid github username");
  }
});
