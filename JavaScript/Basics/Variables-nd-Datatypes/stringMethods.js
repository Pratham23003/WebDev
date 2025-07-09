//string methods

//accessing characters
////bracket notation
let greeting = "Hello";
console.log(greeting[0]); //H
console.log(greeting[4]); //o
console.log(greeting[5]); //undefined
////using charAt()
let greeting2 = "Hello";
console.log(greeting.charAt(0)); //H
console.log(greeting.charAt(4)); //o
console.log(greeting.charAt(5)); //undefined

//concatentation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
////using concat
let firstName = "John";
let secondName = "Doe";
console.log(firstName.concat(" ", secondName));

//case conversion
let mixedCase = "JavaScript is fun";
console.log(mixedCase.toLowerCase()); //lowercase
console.log(mixedCase.toUpperCase()); //uppercas

//searching and checking content
////indexOf();
let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.indexOf("quick")); //4
console.log(sentence.indexOf("dog")); //35
console.log(sentence.indexOf("cat")); //-1 (does not exist)
////lastIndexOf(); returns the index of last occurance.
let words = "Hello World Hello";
console.log(words.indexOf("Hello")); //0
console.log(words.lastIndexOf("Hello")); //12
///includes(); returns true if the string contains the substring, false otherwise
let phrase = "To be or not to be";
console.log(phrase.includes("be")); //true
console.log(phrase.includes("To")); //true
console.log(phrase.includes("two")); //false
///startsWith(); returns true if the string starts with a given string, false otherwise
let fileName = "document.pdf";
console.log(fileName.startsWith("doc")); //true
console.log(fileName.endsWith(".pdf")); //tru
console.log(fileName.endsWith(".txt")); //

//EXTRACTING PARTS OF STRING
///slice(startIndex, endIndex); extracts a portion of a string
let fullDate = "2023-10-26";
console.log(fullDate.slice(0, 4)); //2023 sliced
console.log(fullDate.slice(5, 7)); //10 sliced
console.log(fullDate.slice(-2)); //26 sliced (last two characters)
///substring(startIndex,endIndex); //similar to slice but doesnt accept -ve index
let brand = "Apple, Dell, Lenovo";
console.log(brand.substring(0, 5)); //apple
console.log(brand.substring(7, 11)); //banana

//Splitting Strings
///split();
let sentence2 = `Lingang Guli Guli Guli Watcha
Lingang Gu Lingang Gu
Lingang Guli Guli Guli Watcha
Lingang Gu Lingang Gu`;
console.log(sentence2.split(",")); //splits the string into array with , as a separator

///Trimming Whitespace
//trim() - Removes whitespace (spaces, tabs, newlines) from both ends of a string.
let spacedText = "      Hello World           ";
console.log(spacedText.trim());

///Replacing parts of a string
let text1 = "Mr Blue has a blue car.";
console.log(text1.replace("blue", "red"));

///Repeating String
let emoji = "👍";
console.log(emoji.repeat(5));