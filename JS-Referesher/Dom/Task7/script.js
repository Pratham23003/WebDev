const div = document.querySelector('.div');

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor());

div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = randomColor();    
})
div.addEventListener('mouseout', (e) => {
    div.style.backgroundColor = randomColor();
})