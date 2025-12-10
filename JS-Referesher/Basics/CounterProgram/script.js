let counterVar = 0;
let counterText = document.getElementById('number')
const decreaseBtn = document.getElementById('btn1');
const resetBtn = document.getElementById('btn2');
const increaseBtn = document.getElementById('btn3');

increaseBtn.onclick = function(){
    counterVar++;
    counterText.textContent = counterVar;
}
resetBtn.onclick = function(){
    counterVar = 0;
    counterText.textContent = counterVar;
}
decreaseBtn.onclick = function(){
    counterVar--;
    counterText.textContent = counterVar;
}
