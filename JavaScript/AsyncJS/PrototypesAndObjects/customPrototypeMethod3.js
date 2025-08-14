// Create a new method called lastElement() on Array.prototype.
// This method should not take any arguments.
// It should return the last element of the array it was called on.
// If the array is empty, it should return undefined.

Array.prototype.lastElement = function(){
    if(this.length == 0){
        return undefined;
    }
    else{
        return this[this.length-1];
    }
};

const myArray = [1,2,3,4];
console.log(myArray.lastElement());

const newArray = [12,23,4,5,7,8,9,12,53];
console.log(newArray.lastElement());