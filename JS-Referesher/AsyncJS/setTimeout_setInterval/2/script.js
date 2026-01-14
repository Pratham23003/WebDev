const startBtn = document.getElementById('startBtn');
let progressBar = document.getElementById('progressFill');
let progressText = document.getElementById('progressText');

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    let count = 0;
    let download = setInterval(() => {
        if(count <= 99){
            count++;
            progressBar.style.width = `${count}%`
            progressText.textContent = `${count}%`;
        }
    }, 100);
})