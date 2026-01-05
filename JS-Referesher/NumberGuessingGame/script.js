let tries = 5;
let currentTries = 0;
let running = true;
let guessNum = 0;

while(running){
    const randomNum = generateRandomNum();
    guessNum = window.prompt("Guess a number between 1 and 100. You get 5 Tries.");
    guessNum = Number(guessNum);
    console.log(typeof guessNum, guessNum);
    
    if(isNaN(gNum) || gNum < 1 || gNum > 100){
        window.alert("Na kare janaab Na kare!");
    }
    
    if(guessNum > randomNum){
        window.alert("Guessed Number is more than ", randomNum);
        tries--;
        currentTries++;
    }
    if(guessNum < randomNum){
        window.alert("Guessed Number is less than ", randomNum);
    }
    if(guessNum == randomNum){
        window.alert("Correct! You Won");
    }
    else if(tries == 0){
        window.alert("Hatt BKL! Incorrect");
    }

}
function generateRandomNum(){
    const randomNum = parseInt(Math.random()*100+1);
    console.log(randomNum);
    return randomNum;
}

