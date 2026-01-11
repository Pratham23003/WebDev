let h1 = document.getElementById('title');
console.log(h1.textContent);

let p = document.querySelector("p");
console.log(p.innerText);

h1.innerText = "DOM is awesome";
p.style.color = "red";

//dom l2
let btn = document.getElementById('btn');
let body = document.querySelector('body');
btn.addEventListener('click', () => {
    h1.innerText = "Button Clicked!"
    body.style.backgroundColor = "purple";
});

