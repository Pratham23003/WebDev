//trim method
let userName = "Walter        ";
console.log("Before Trimming length : ", userName.length);
userName = userName.trim();
console.log("After Trimming length : ", userName.length);
console.log(userName);

//uppercase method
let userName2 = "brocode";
console.log(userName2.toUpperCase());

//startsWith && endsWith
let userName3 = "BorCode";
console.log(userName3.startsWith(" ")); //false
console.log(userName3.endsWith("e"));

