const darkModeBtn = document.getElementById('themeToggle');

document.addEventListener('DOMContentLoaded', (e)=>{
    const saved = localStorage.getItem('theme');
    console.log(saved);
    if(saved){
        document.documentElement.setAttribute("data-theme",saved)
    }
})

darkModeBtn.addEventListener('click', (e)=>{
    const theme = document.documentElement.getAttribute("data-theme");
    
    if(theme == "light"){
        document.documentElement.setAttribute("data-theme", "dark");
        console.log("theme : ",theme);
        localStorage.setItem('theme',"dark");
    }   
    else if (theme == "dark"){
        document.documentElement.setAttribute("data-theme", "light");
        console.log("theme :",theme);
        localStorage.setItem('theme',"light");
    }
})