//slice
const fullName = "Bro Code";
let firstName = fullName.slice(0,3);
let lastName = fullName.slice(4);
console.log(firstName);
console.log(lastName);
let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);
console.log(firstChar);
console.log(lastChar);

//slicing use cases
const email = "user1@gmail.com";
//to extract the username we can use slice and indexOf methods
let usernameExtracted = email.slice(0, email.indexOf("@"));
console.log(usernameExtracted);