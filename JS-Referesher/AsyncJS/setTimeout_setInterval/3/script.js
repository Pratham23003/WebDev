const closeBtn = document.getElementById('closeBtn');
const progressBar = document.getElementById('progressFill');
const banner = document.getElementById('banner');
let count = 0;
const timer = setInterval(() => {

  if (count < 100) {
    count++;
    progressBar.style.width = `${count}%`;
  } else {
    progressBar.style.width = '100%';
    banner.style.animationName = 'slideUp';
    setTimeout(() => { banner.style.display = 'none'; }, 100);
    clearInterval(timer);
  }
}, 30);