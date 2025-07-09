//functions

//calculate area
function areaCal(length, breadth){
    return length * breadth;
}

let result = areaCal(100,200);
let result2 = areaCal(300, 2);
console.log(result);
console.log(result2);

//printNumberfunction
function printNum(num1){
    for(let i = 0; i < 100; i++){
        console.log(num1);
    }
}
printNum(5);

//get average 
function getAvg(num1, num2){
    let avg = (num1+num2)/2;
    console.log("Average : ",avg);
}
getAvg(10,20);

//function printName
function printName(firstName,lastName){
    return firstName + " " + lastName;
}
let fullName = printName("John","Doe");
console.log(fullName);
