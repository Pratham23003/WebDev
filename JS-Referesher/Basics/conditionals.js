function getGrade(val){
    if(val >= 0 && val <=32) return ("Fail");
    else if(val >= 33 && val <=59) return ("D");
    else if(val >= 60 && val <=69) return ("C");
    else if(val >= 70 && val <=79) return ("B");
    else if(val >= 80 && val <=89) return ("A"); 
    else if(val >= 90 && val <=100) return ("C");
    else return ("invalid marks");
}


for(let i = 0; i <= 10; i++){
    let randomNum = Math.floor(Math.random()*100+1);
    console.log(randomNum, `${getGrade(randomNum)}`);
}