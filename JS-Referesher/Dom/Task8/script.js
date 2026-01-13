// Dog moves along with the mouse
const dog = document.querySelector('.div');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    dog.style.left = (e.clientX - rect.left) + "px";
    dog.style.top = (e.clientY - rect.top) + "px";
});