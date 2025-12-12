let diceNum = document.getElementById("roll");
let rollBtn = document.getElementById("rollBtn");

rollBtn.onclick = function(){
    let randomNum = Math.floor(Math.random() * 6) + 1;
    diceNum.textContent = randomNum;
};