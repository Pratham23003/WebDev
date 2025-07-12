// correcting the deep copy issue in obj4.js 
const user = {
    name: "Walter Hartwell White",
    address: {
        street : "308, Negra Arroyo Lane",
        city: "Albuquerque",
        state: "New Mexico",
        pincode: "87104"
    },
    hobbies: ["teaching","cooking"]
};

//fix the deep copy issue in obj4.js by 
// using structuredClone(user) method 
let userDeepCopy = structuredClone(user);
userDeepCopy.address.street = "310, Palm Avenue";
userDeepCopy.address.pincode = "141122";

console.log("Original User :",user);
console.log("True Deep Copy :",userDeepCopy);