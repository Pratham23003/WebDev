const PI = 3.1428571429;
let radius = document.getElementById('radiusInput');
let submitBtn = document.getElementById('submitBtn');
let resultContainer = document.getElementById('resultDisplay');
let circumference;


submitBtn.addEventListener('click', () => {
    radius = Number(radius.value);
    circumference = 2 * PI * radius; 
    resultContainer.textContent = `${circumference}`;
});