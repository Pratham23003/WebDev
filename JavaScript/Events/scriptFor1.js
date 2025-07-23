const para = document.querySelectorAll('p');

function alertParaClick(event){
    alert("You have clicked para " + event.target.textContent);
}

// for(let i = 0; i<para.length; i++){
//     let paras = para[i];
//     console.log("eventListener added");
//     paras.addEventListener('click', alertParaClick);
// }
//this is one method of doing this the better method is 
//to directly use .addEventListener to the div instead of all the 4paras.

const getDiv = document.getElementById('wrapper');
document.addEventListener('click',alertParaClick);