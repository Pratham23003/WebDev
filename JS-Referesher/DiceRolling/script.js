//get dom elements
const imgContainer = document.getElementById('img');
const submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click',(event) =>{
    event.preventDefault();
    let randomNum = Math.floor(Math.random() * 6 + 1);
    imgContainer.src = `images/${randomNum}.png`;
});