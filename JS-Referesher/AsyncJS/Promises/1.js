let pr = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let randomNum = Math.floor((Math.random()*10)+1);
        if(randomNum > 5) resolve(randomNum);
        else reject(randomNum);
    },3000);
});
pr
.then(function (val){
    console.log("Resolved :",val);
})
.catch(function (val){
    console.log ("Rejected :",val);
});