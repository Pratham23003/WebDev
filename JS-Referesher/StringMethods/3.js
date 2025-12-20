//replace
let phoneNumber = "123-456-7890";
console.log("Before replaceAll method : ", phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", "");
console.log("After replaceAll method : ", phoneNumber);

//pad method -> pads the string until its specified character long
console.log(phoneNumber.padStart(10, "0"));