function changeText() {
  const getFirstPara = document.getElementById("fpara");
  console.log(getFirstPara);
  getFirstPara.textContent = "Hello Dawg";
}
const getFirstPara = document.getElementById("fpara");
getFirstPara.addEventListener('click', changeText);