////Arrays

///creating an array using array literal
//empty array
const emptyArray = [];
console.log(emptyArray);
//array with initial values
const fruits = ["apple", "banana", "orange"];
const primeNumbers = [2,3,5,7,11];
const mixedData = ["text", 123, true, null];
console.log(fruits);
console.log(primeNumbers);
console.log(mixedData);
///creating an array using array() Constructor (Less Common)
//empty array
const anotherEmptyArray = new Array();
console.log(anotherEmptyArray); //output: []
//array with initial values
const colors = new Array("red", "green", "blue");
console.log(colors);
//if we pass a single number argument to the array constructor
//it will create another array with that much slots
const weirdArray = new Array(4);
console.log(weirdArray);
console.log(weirdArray.length);