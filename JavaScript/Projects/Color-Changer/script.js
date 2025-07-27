const getBoxes = document.querySelectorAll('.box');
console.log(getBoxes);

const getDocument = document.querySelector('body');
console.log(getDocument);

getDocument.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target.id == 'red'){
        getDocument.style.backgroundColor = "rgb(229, 123, 123)";
    }
    else if(event.target.id == 'blue'){
        getDocument.style.backgroundColor = "hsl(212, 65%, 54%)";
    }
    else if(event.target.id == 'green'){
        getDocument.style.backgroundColor = "lightgreen";
    }
    else if(event.target.id == 'yellow'){
        getDocument.style.backgroundColor = "rgba(250, 250, 0, 0.305)";
    }

});