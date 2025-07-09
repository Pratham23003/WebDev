////stringggsgsggssgsggs
let ogString = "Hello";
console.log("Original :", ogString);

//this appears to modify the ogString, but actually returns a NEW string
let modifiedString = ogString.toUpperCase();

console.log("Modified :", modifiedString); //Modified => HELLO
console.log("Original (still):", ogString);

//if it was to be actually modified.. then the ogSting would get modified
//but if we log the ogString it say the same despite, we converted it to uppercase

//length of string
console.log("Length of ogString :", ogString.length);
console.log("Length of modifiedString :", modifiedString.length);

//string concatenation using backticks and template literals
let string1 = "Mobile";
let string2 = "Charger"
let finalString = `${string1} ${string2}`;
console.log(finalString);