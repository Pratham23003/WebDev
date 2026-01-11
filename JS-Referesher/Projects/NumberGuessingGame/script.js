let tries = 5;
let currentTries = 0;
let running = true;
let guessNum = 0;
const randomNum = generateRandomNum();

while (running) {
  guessNum = window.prompt(
    "Guess a number between 1 and 100. You get 5 tries."
  );

  guessNum = Number(guessNum);

  // input validation
  if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
    window.alert("Na kare janaab Na kare!");
    continue;
  }

  currentTries++;

  if (guessNum > randomNum) {
    window.alert(`Too High! Tries left: ${tries - currentTries}`);
  } 
  else if (guessNum < randomNum) {
    window.alert(`Too Low! Tries left: ${tries - currentTries}`);
  } 
  else {
    window.alert(
      `Correct! You won \nAnswer: ${randomNum}\nAttempts: ${currentTries}`
    );
    running = false;
    break;
  }

  if (currentTries === tries) {
    window.alert(`Tries khatam !\nCorrect number was ${randomNum}`);
    running = false;
  }
}

function generateRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}
