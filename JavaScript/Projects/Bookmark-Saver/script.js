//dom elements

//sitename Element
const siteNameEl = document.getElementById("site-name-input");
//form element
const formEl = document.getElementById("bookmark-form");
//site URL element
const siteURLEl = document.getElementById("site-url-input");
const submitBtn = document.getElementById("submit-btn");
//list container
const listContainer = document.getElementById("bookmarks-list");

//clear the UI
listContainer.innerHTML = "";
//if theres something in the localStorage pull it up OR empty array init
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

submitBtn.addEventListener("click", addBookmarks);

function addBookmarks(event) {
  event.preventDefault();
  //get form values
  const siteName = siteNameEl.value.trim();
  const siteURL = siteURLEl.value.trim();
  // console.log(siteName);
  // console.log(siteURL);

  //pushing values to the bookmarks array
  if (!siteName || !siteURL) {
    alert("Input fields cannot be empty");
    return;
  } 
  else {
    bookmarks.push({
      id: Date.now,
      siteName,
      siteURL,
    });
    //also updating the localStorage as well
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    //console.log("About to execute update UI");
    updateUI(siteName, siteURL);
    //clear the values after function call
    formEl.reset();
  } 
}
function updateUI(siteName, siteURL) {
  const sortedBookmarks = [...bookmarks].reverse();
  console.log(sortedBookmarks);
  sortedBookmarks.forEach((bookmark, index) => {
    console.log(`${bookmark}: ${index}`);
    const bookmarkLI = createBookmarkLI(bookmark);
    listContainer.appendChild(bookmarkLI);
  });
}

function createBookmarkLI(bookmark) {
  console.log(`BookMark Recieved : ${bookmark}`);

}

localStorage.clear();