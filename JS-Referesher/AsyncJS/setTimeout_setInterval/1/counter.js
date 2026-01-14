let count = 10;
let counterContainer = document.getElementById('counter');
let countLogic = setInterval(() => {
    if(count > 0) count--;
    counterContainer.textContent = count;
}, 1000);