//dom elements

//sitename Element 
const siteNameEl = document.getElementById('site-name-input');
//site URL element
const siteURLEl = document.getElementById('site-url-input');
const submitBtn = document.getElementById('submit-btn');
//list container
const listContainer = document.getElementById('bookmarks-list');

//if theres something in the localStorage pull it up OR empty array init
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

submitBtn.addEventListener('click', addBookmarks);

function addBookmarks(event){
    event.preventDefault();
    //get form values
    const siteName = siteNameEl.value.trim();
    const siteURL = siteURLEl.value.trim();
    // console.log(siteName);
    // console.log(siteURL);

    //pushing values to the bookmarks array
    bookmarks.push({
        id: Date.now,
        siteName,
        siteURL
    });
    //also updating the localStorage as well
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

}