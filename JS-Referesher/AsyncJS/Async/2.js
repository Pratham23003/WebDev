function willRunAfterFewTime(fnc){
    setTimeout((fnc),Math.floor((Math.random)*20)*3000);
}
willRunAfterFewTime(function(){
    console.log("hey");
});