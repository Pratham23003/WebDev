// 1. Play Button Click (Single Listener):
// * Get a reference to the "Play" button within the song-alpha media item (id="play-btn-song-alpha").
// * Add a click event listener to this button.
// * When clicked, console.log a message: "Playing Song Alpha.mp3".
const getPlayBtnSongAlpha = document.getElementById('play-btn-song-alpha');
getPlayBtnSongAlpha.addEventListener('click',() => {
    console.log("Playing Song Alpha");
    alert("Playing Song Alpha");
});

// 2. Delete Button Click (Using event.target and a generic approach):
// * Get a reference to the "Delete" button within the video-beta media item (id="delete-btn-video-beta").
// * Add a click event listener to this button.
// * Inside the handler function, use event.target to get a reference to the button that was clicked.
// * From event.target, traverse up the DOM to find its parent media-item div (e.g., event.target.closest('.media-item') or a series of parentElement).
// * console.log a message like: "Deleting file: [name of file]". (Hint: You can get the file name from the <span> inside the media-item div.)
// * After logging, actually remove the entire media-item div from the DOM using element.remove().
const getDeleteBtnVideoBeta = document.getElementById('delete-btn-video-beta');
getDeleteBtnVideoBeta.addEventListener('click', function(event){
    const getTargetDelBtn = event.target;
    console.log(getTargetDelBtn);

    const parentElement = event.target.closest('.media-item');
    console.log("Parent Element :",parentElement);
    alert("Parent Element Found! Check Console for more info.");

    const getFileName = parentElement.querySelector('#span-video-title');
    console.log("Deleteing File :",getFileName.textContent);
    alert(`${getFileName.textContent} will be removed`);
    parentElement.remove();
});

// 3. Input Field Interaction (input event):
// * Get a reference to the input field (id="new-media-name").
// * Add an input event listener to this field.
// * Inside the handler, console.log the current value of the input field (event.target.value) every time the user types.
const getInputField = document.getElementById('new-media-name');
getInputField.addEventListener('input', (event)=> {
    console.log(event.target.value);
});

// 4. Form Submission (submit event with preventDefault):
// * Get a reference to the add-media-form section by its ID.
// * Add a submit event listener to this form. (Yes, the section acts like a form container here).
// * Inside the event handler:
// * Crucially, call event.preventDefault() to stop the default browser behavior (which would be to reload the page).
// * Get the value from the new-media-name input field.
// * console.log a message: "Attempting to add: [input value]".
// * Clear the input field's value after submission.

const getMediaForm = document.getElementById('input-form');
getMediaForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const storeInputData = (getInputField.value);
    console.log(`Attempting to add: ${storeInputData}`);
    alert(`${storeInputData} will be added`);
    getInputField.value = ''; //clears the input
});

