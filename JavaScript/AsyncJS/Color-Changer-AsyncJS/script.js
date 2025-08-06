//get DOM elements 
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const docBg = document.querySelector('body');

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor());

let startId = 0;
startBtn.addEventListener('click', ()=> {
    startId = setInterval(() => {
        docBg.style.backgroundColor = randomColor();
    },200);
}); 

stopBtn.addEventListener('click', ()=> {
    clearInterval(startId);
    console.log("stopping now !");
    startId = null; // good practice 
});