//get dom elements
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const gameArea = document.getElementById("game-area");
const restartScreen = document.getElementById("restart-screen");
const inputField = document.getElementById("user-guess-input");
const submitBtn = document.getElementById("submit-guess-btn");
const previousGuessesDiv = document.getElementById("previous-guess");
let previousGuessesSpan = document.getElementById("previous-guess-span");
let remainingGuessesSpan = document.getElementById("remaining-guess-span");
const messageDisplay1 = document.getElementById("message-display");
const messageDisplay2 = document.getElementById("message-display-2");
const messageDisplay3 = document.getElementById("message-display-3");
const messageDisplayStatus = document.getElementById("message-display-status");
const currentNumberMessageSpan = document.getElementById(
  "current-choosen-number"
);
const hiddenRestartBtn = document.querySelector(".hidden");
// const randomNumberPlaceHolderSpan = document.getElementById('random-number-placeholder');

// random number logic
function generateRandomNum() {
  return parseInt(Math.random() * 100 + 1);
}
let randomNum = generateRandomNum();

console.log(randomNum);

//state variables
const totalGuesses = 10;
prevGuesses = 0;
let prevGuessArray = [];
let numsOfGuess = 0; //current number of guesses
let playGame = true;


gameStart(); //starts the game

//reset state after pressing restart
function stateReset(){
    startScreen.style.display = "block";
    gameArea.style.display = "none";
    gameStart();
}


//change state
function gameStart() {
    if (playGame) {
    const changeState = startBtn.addEventListener(
      "click",
      function secondScreen(event) {
        //change state from startScreen to gameArea
        const firstState = startScreen.classList.remove(`active`);
        const nextState = gameArea.classList.add("active");
        console.log(startScreen);
      }
    );
  }
}

// A single, clean function to handle all the game logic for one guess
const checkGuess = submitBtn.addEventListener(
  "click",
  function checkGuess(event) {
    event.preventDefault();

    const userGuess = parseInt(inputField.value);

    // validation checks
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      inputField.value = ""; // Clear the field
      return; // Stop the function here
    }

    // Main game logic
    if (userGuess === randomNum) {
      // Correct guess (WIN)
      messageDisplayStatus.textContent = `Congratulations! You won! The number was ${randomNum}.`;
      gameOver(); //gameOver nu call laati.
    } else if (numsOfGuess >= totalGuesses) {
      // Game over (LOSE)
      messageDisplayStatus.textContent = `Game Over! The number was ${randomNum}.`;
      gameOver(); //gameOver nu call laado cuz khtm aa game hun ki krna
    } else {
      // Incorrect guess (CONTINUE playing)
      if (userGuess > randomNum) {
        messageDisplayStatus.textContent = `Your guess (${userGuess}) is too high!`;
      } else {
        messageDisplayStatus.textContent = `Your guess (${userGuess}) is too low!`;
      }
      // Update state after an incorrect guess
      prevGuessArray.push(userGuess);
      numsOfGuess++;
      inputField.value = ""; //clear the input field
    }

    // Update the DOM displays
    previousGuessesSpan.textContent = prevGuessArray.join(",");
    remainingGuessesSpan.textContent = totalGuesses - numsOfGuess; // Correct remaining guesses calculation
    inputField.value = ""; // Clear the input field
  }
);

function gameOver() {
  //state handling
  playGame = false;
  inputField.disabled = true;
  submitBtn.disabled = true;

  //display state handliinggggngngngngniggngng is this tuf ?
  hiddenRestartBtn.style.display = "block";
  inputField.style.display = "none";
  submitBtn.style.display = "none";
  previousGuessesDiv.style.display = "none";
}

function restartGame() {
  prevGuessArray = []; //reset the array
  numsOfGuess = 1; //reset nums of guess
  previousGuessesSpan = 0; //reset previous guess span
  console.log("Game Restarted INIT");
  restartScreen.style.display = "none";
  gameArea.style.display = "none";
  gameStart();
  stateReset();
}
hiddenRestartBtn.addEventListener("click", restartGame);
