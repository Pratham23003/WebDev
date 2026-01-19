let pr = new Promise(function (resolve, reject){
    setTimeout(()=>{
        let rn = Math.floor((Math.random()*10)+1);
        if (rn > 5) resolve ("Resolved with " + rn);
        else reject ("Rejected with " + rn); 
    }, 3000);
});
async function demo() {
    try{
        let val = await pr;
        console.log(val);
    }
    catch(err){
        console.log(err);
    }
}