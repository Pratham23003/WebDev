String.prototype.trueLength = function() {
    return this.trim().length;
}

const myName = "Pratham     ";
console.log(myName.length); // Output: 12 (shows original length with spaces)

// Now, we call the method on the string itself, with no arguments
console.log(myName.trueLength()); // Output: 7 (the length after trimming)

let anotherName = "  Pratham  ";
console.log(anotherName.trueLength()); // Output: 7

