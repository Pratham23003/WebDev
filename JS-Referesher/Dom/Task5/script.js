let btn = document.querySelector('#btn');
let fileInput = document.getElementById('main-file-inpt');
btn.addEventListener("click", (e) => {
    fileInput.click();
})
fileInput.addEventListener("change",(e) => {
    btn.innerText = e.target.files[0].name;
});
//video left @ 2:46:40;