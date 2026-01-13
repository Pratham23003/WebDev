const input = document.getElementById('input');
const heading = document.getElementById('headingspan');
let counter = 0

input.addEventListener("input", (e) => {
    heading.textContent = input.value.length;
})