
const textBox = document.getElementById("temperature-input");
const C2F_radioBtn = document.getElementById("C2F");
const submitBtn = document.getElementById("submit-btn");
const F2C_radioBtn = document.getElementById("F2C");
const resultBox = document.getElementById("result-box");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const textBoxVal = Number(textBox.value);

    if (C2F_radioBtn.checked) {
        function calcC2F(){
            return ((textBoxVal * 9/5) + 32);
        }
        let C2Fvalue = calcC2F();
        resultBox.style.display="block";
        resultBox.textContent=`${textBoxVal} -> ${C2Fvalue} + °C`;
    }
    else if (F2C_radioBtn.checked){
        function calcF2C(){
            return ((textBoxVal - 32) * 5/9);
        }
        let F2Cvalue = calcF2C();
        resultBox.style.display="block";
        resultBox.textContent=`${textBoxVal} -> ${F2Cvalue} + °F`;
    }
  
});
