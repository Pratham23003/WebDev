//Var Variable Declaration
var globalVar = "I'm global!";
console.log(globalVar);

function exampleVarScope() {
    var functionVar = "I'm function scoped";
    console.log(functionVar);

    if(true) {
        var blockScopeVar = "I seem block-scoped, but I'm not!";
        console.log(blockScopeVar);
    }
    console.log(blockScopeVar);
}
exampleVarScope();

//hoisting
console.log(hoistedVar);
var hoistedVar = "Hello Hoisting";
console.log(hoistedVar);

// re-declaration example
var myName = "Pratham";
console.log(myName);
var myName = "Nikhil";
console.log(myName);