//shallow copy and deep copy
////shallow copy
const languages = {
    pun: "Sat Shri Akaal",
    hin: "Namaskaar",
    eng: "Hello",
    esp: "Hola"
}
let lang2 = languages;  //this created a shallow copy
lang2.hin = "Namaste";  // now languages.hin === lang2.hin due to shallow copy;

console.log(languages.hin);
console.log(lang2.hin);

////deep copy
const languagesDeepCopy = {
    pun: "Sat Shri Akaal",
    hin: "Namaskaar",
    eng: "Hello",
    esp: "Hola"
}

let langDeepCopy = {...languagesDeepCopy};
langDeepCopy.pun = ("Ssikaal");

console.log("Original : ", languagesDeepCopy);
console.log("Deep Copy : ", langDeepCopy);

////deep copy fails in case of nested objects or arrays
//example
const user = {
    name: "Walter Hartwell White",
    address: {
        street : "308, Negra Arroyo Lane",
        city: "Albuquerque",
        state: "New Mexico",
        pincode: "87104"
    },
    hobbies: ["teaching","cooking"]
}
let deepCopyUSER = {...user};
// trying to change a nested property
deepCopyUSER.address.street = "456 Oak AVE"; //tryna modify nested object (address)
deepCopyUSER.address.pincode = "90923";

console.log("Original User:",user);
console.log("User Copy :",deepCopyUSER);
//to correctly make its deep copy .. done in ./WebDev/JavaScript/Basics/Objects/obj5.js
