//arrow function problem -> Create an arrow function isEven that takes a number parameter and returns true if the number is even, false otherwise (use the modulo operator %). Use the concise body syntax.
const isEven = (num1) => {
    if(num1 % 2 === 0){
        console.log("Even");
    }
    else{
        console.log("Not Even");
    }
}
isEven(5);
isEven(10);
isEven(12);
isEven();