//string
const greeting = "Hello World";
console.log(greeting, " - ", typeof greeting);

//number
let price = 19.99; //float
let age = 30; //integer
let infinity = 1 / 0; //infinity(number)
console.log(price, " - ", typeof price);
console.log(age, " - ", typeof age);
console.log(infinity, " - ", typeof infinity);

//boolean
let isActive = true;
let isAdmin = false;
console.log(isActive, " - ", typeof isActive);
console.log(isAdmin, " - ", typeof isAdmin);

//null
let userLoggedIn = null;
console.log(null, " - ", typeof null);

//undefined
let undefinedVar;
console.log(undefinedVar, " - ", typeof(undefinedVar)); // undefined

//symbol
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2, " - ", typeof(id1),",",typeof(id2));//false (they are unique)