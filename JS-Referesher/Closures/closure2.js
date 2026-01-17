function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5){
            click++;
            console.log(`clicked : ${click} times`);
        }
        else{
            console.error("LIMIT Exceeded, TRY AGAIN LATER");
        }
    }
}
//advantage of this closure is that the click variable became a pvt variable
//and can't be accessed outside
let fnc = clickLimiter();
fnc();      //1
fnc();      //2
fnc();      //3
fnc();      //4
fnc();      //5 
fnc();      //Limit Exceeded..
