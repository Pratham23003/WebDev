let inputText = document.getElementById('inputBox');
let submitBtn = document.getElementById('submitBtn');
let heading = document.getElementById('heading');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    console.log(inputText.value);
    alert(`Hello ${inputText.value}`);
    heading.innerHTML = `<h1>Hello ${inputText.value}</h1>`;
});

  