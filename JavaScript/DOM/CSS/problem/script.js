////js tasks

//1) Accessing elements
const refHeader = document.getElementById("app-header");
console.log("Header :", refHeader);
const refHeaderH1Child = refHeader.querySelector("h1");
console.log("Header's H1 Child :", refHeaderH1Child);

const refMessageArea = document.getElementById("message-area");
console.log("Message Area :", refMessageArea);

const refMediaListContainer = document.getElementById("media-list-container");
console.log("Media List Container :", refMediaListContainer);

const refAllMediaItem = document.querySelectorAll(".media-item");
console.log(refAllMediaItem);

const refAddFileButton = document.getElementById("add-media-btn");
console.log("Add File Button :", refAddFileButton);

//2) Modifying Content
const modifyTextContentMediaItem = document.getElementById("message-area");
console.log("Modifying Content :", modifyTextContentMediaItem);
modifyTextContentMediaItem.textContent = "Your CloudPlay library is ready!";

//3) Modifying Attributes
const modifyAttributes = document.getElementById("song-alpha");
console.log("Modifying Attributes :", modifyAttributes);
modifyAttributes.setAttribute("title", "Click to play this Song");

//4) Modifying Styles
const getVideoBeta = document.getElementById("video-beta");
console.log("Before Modifying Styles :", getVideoBeta);
console.log(getVideoBeta.classList);
getVideoBeta.classList.add("highlight");

//5) Creating and Appending New Elements
const creatingNewElement = document.createElement('div');
const addingNewClass = creatingNewElement.classList.add('class','media-item');
console.log(creatingNewElement);
creatingNewElement.innerHTML = '<span>New Song Added.mp3</span> <div class = "controls"> <button class = "play-btn">Play</button> <button class = "delete-btn">Delete</button> </div>';
const parentElement = document.querySelector('.media-item');
console.log(parentElement);
parentElement.append(creatingNewElement);

//6) Removing Elements
const parentSongAlpha = document.getElementById('song-alpha');
console.log(parentSongAlpha);
const parentControlClass = parentSongAlpha.querySelector('.controls')
console.log(parentControlClass);
const deleteBtn = parentControlClass.querySelector('#delete-btn-song-alpha');
console.log(deleteBtn);
const delSongAlphaBtn = parentControlClass.removeChild(deleteBtn);