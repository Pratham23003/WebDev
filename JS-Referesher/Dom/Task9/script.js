const nav = document.getElementById('nav');
nav.addEventListener('click', (e) => {
    console.log(e);
    window.alert(`Clicked on ${e.target}`);
})