//finally block will run despite error aaye ya na
function safeDivide(val1, val2){
try{
    if(val2 === 0) throw new Error("Cannot divide by zero!");
    else return val1/val2;
}
catch(error){
    return error.message;
}
finally{
    console.log("this is the finally block, this will run everytime despite error aave ya na aave");
}
}


console.log(safeDivide(10, 2)); 
console.log(`\n<-------------->`);
console.log(safeDivide(8, 0)); 
console.log(`\n<-------------->`);
console.log(safeDivide(9, 3)); 
console.log(`\n<-------------->`);
