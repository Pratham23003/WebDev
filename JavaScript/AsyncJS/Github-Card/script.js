//dom elements
const inputField = document.getElementById("input-bar");
const submitBtn = document.getElementById("submit-btn");
const inputSubmitContainer = document.getElementById("input-submit-container");
const cardContainer = document.getElementById("card-container");
const usernameDisplay = document.getElementById("user-name");
const avatarDisplay = document.getElementById("avatar");
const bioText = document.getElementById("user-bio");
const numOfFollowers = document.getElementById("followers");
const numOfFollowing = document.getElementById("following");
const numOfRepos = document.getElementById("repos");
const locationText = document.getElementById("location");

//api calls
function getGithubData(username) {
  const requestURL = `https://api.github.com/users/${username}`;
  const xhrReq = new XMLHttpRequest();
  xhrReq.open("GET", requestURL); // send a GET request to the github api

  xhrReq.onreadystatechange = function () {
    console.log(xhrReq.readyState);
    console.log(xhrReq.status)
    
    if (xhrReq.readyState === 4) {
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
    
    // if(getGithubData.xhrReq.status == '404'){
    //     alert(`${username} does not exist. Please enter a valid github username`);
    // }

    getGithubData(username);
  }
  else{
    alert("Please enter a valid github username");
  }
});
