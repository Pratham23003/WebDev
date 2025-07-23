function changeText(event){
    console.log(event); //logging the event object
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Veer G";
}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);