//JS try and catch
function safeDivide(val1, val2){
try{
    if(val2 === 0) throw new Error("Cannot divide by zero!");
    else return val1/val2;
}
catch(error){
    return error.message;
}
}

console.log(safeDivide(10, 2)); 
// Should return: 5

console.log(safeDivide(8, 0)); 
// Should return: "Cannot divide by zero!"

console.log(safeDivide(9, 3)); 
// Should return: 3
