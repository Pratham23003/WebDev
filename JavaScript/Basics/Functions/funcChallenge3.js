// Challenge 3: Simple Math Operation Calculator
// Create a function performOperation that:
// Takes three arguments: num1, num2, and operation (a string like "add", "subtract", "multiply", "divide").
// It should perform the specified operation on num1 and num2 and return the result.
// Important:
// If operation is "divide" and num2 is 0, return the string "Cannot divide by zero."
// If the operation is not recognized, return "Invalid operation."
const performOperation = (num1, num2, operation) => {
    if(operation == "add"){
        return num1+num2;
    }
    else if(operation == "subtract"){
        return num1-num2;
    }
    else if(operation == "multiply"){
        return num1*num2;
    }
    else if(operation == "divide"){
        if(num2 == 0) return("Cannot divide by zero.");
        else return(num1/num2);
    }
    else
        return("Invalid operation.");
}
//test cases
console.log(performOperation(10, 5, "add")); // Should return 15
console.log(performOperation(10, 5, "subtract")); // Should return 5
console.log(performOperation(4, 3, "multiply")); // Should return 12
console.log(performOperation(10, 2, "divide")); // Should return 5
console.log(performOperation(10, 0, "divide")); // Should return "Cannot divide by zero."
console.log(performOperation(5, 2, "modulo")); // Should return "Invalid operation."