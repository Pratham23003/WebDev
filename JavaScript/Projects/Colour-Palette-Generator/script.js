//dom elements
const generateBtn = document.querySelector('#generate-btn');
const palleteContainer = document.querySelector('.palette-container');
const copyBtn = document.querySelector('.copy-btn');
const keepGeneratingBtn = document.getElementById('keep-generating-btn');

function randomColorGenerator(){
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}


generateBtn.addEventListener('click', () => {
    const colors = [];

    for(let i = 0; i < 5; i++){
        colors.push(randomColorGenerator()); // calling the random color generator function 5 times
    } 

    colors.forEach((element, index) => {
        console.log(`Color : ${element}, Index : ${index}`);
    });
    
    //passing the colors to another function updatePaletteDisplay()
    updatePaletteDisplay(colors);
});

function updatePaletteDisplay(colors){
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach((box,index) => {
        const color = colors[index];
        console.log(`Inside For Each :${color}`);
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    });
}

let isGenerating = false;
let intervalId = null;
keepGeneratingBtn.addEventListener("click", (event) => {

  if(!isGenerating){    
    function generateColors() {
    const colors = [];
    for (let i = 0; i < 5; i++) {
      colors.push(randomColorGenerator());
    }
    updatePaletteDisplay(colors);
  }
    intervalId = setInterval(generateColors, 1000);
    isGenerating = true;
    keepGeneratingBtn.textContent = "Stop Generating";
}

  else{
    clearInterval(intervalId);
    isGenerating = false;
    keepGeneratingBtn.textContent = "Keep Generating";
}
});

palleteContainer.addEventListener('click', (event)=>{

    if(event.target.classList.contains('copy-btn')){
        const hexValue = event.target.previousElementSibling.textContent;
        console.log(`${hexValue} has been copied to clipboard`);

        navigator.clipboard.writeText(hexValue) //copies the hexValues to the clipboard
        .then(() => showCopySuccess(event.target.nextElementSibling.querySelector(".copy-btn")))
        .catch((error) => console.log(error))
        .finally(()=> {
            console.log("Function execution successful. Value copied to clipboard")
        });
    }

    else if (event.target.classList.contains("color")){
        const hexValue = event.target.nextElementSibling.querySelector('.hex-value').textContent;
    
        navigator.clipboard.writeText(hexValue) //copies the hexValues to the clipboard
        .then(() => showCopySuccess(event.target.nextElementSibling.querySelector(".copy-btn")))
        .catch((error) => console.log(error))
        .finally(() => {
            console.log("Function execution successful. Value copied to clipboard")
        });
    }

});

function showCopySuccess(element){
    
    element.classList.remove('far', 'fa-copy');
    element.classList.add('fas', 'fa-check');
    element.style.color = "#48bb78";

    setTimeout(()=>{
    element.classList.remove('fas', 'fa-check');
    element.classList.add('far', 'fa-copy');
    element.style.color = "";
    }, 800);
}



// og logic 

// const hexValue1 = document.getElementById('hex-value-1');
// const hexValue2 = document.getElementById('hex-value-2');
// const hexValue3 = document.getElementById('hex-value-3');
// const hexValue4 = document.getElementById('hex-value-4');
// const hexValue5 = document.getElementById('hex-value-5');
// const colorBox1 = document.getElementById('color-box-1');
// const colorBox2 = document.getElementById('color-box-3');
// const colorBox3 = document.getElementById('color-box-2');
// const colorBox4 = document.getElementById('color-box-4');
// const colorBox5 = document.getElementById('color-box-5');
// function updateColors(){
//     colorBox1.style.backgroundColor = randomColorGenerator();
//     colorBox2.style.backgroundColor = randomColorGenerator();
//     colorBox3.style.backgroundColor = randomColorGenerator();
//     colorBox4.style.backgroundColor = randomColorGenerator();
//     colorBox5.style.backgroundColor = randomColorGenerator();
// }
// function updateHexValues(){
//     hexValue1.innerHTML = randomColorGenerator();
//     hexValue2.innerHTML = randomColorGenerator();
//     hexValue3.innerHTML = randomColorGenerator();
//     hexValue4.innerHTML = randomColorGenerator();
//     hexValue5.innerHTML = randomColorGenerator();    
// }
// generateBtn.addEventListener('click', (event) => {
//     updateColors();
//     updateHexValues();
// });