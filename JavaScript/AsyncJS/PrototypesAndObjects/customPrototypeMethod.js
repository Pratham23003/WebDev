//creating a custom method trueLength and injecting in the function prototype
const myName = "Pratham     ";
console.log(myName.length);

Object.prototype.trueLength = function(name){
    this.name = name.trim();
    return this.name.length;
}

console.log(myName.trueLength('hello wowow'));
let tempArray = ["adhas   ","1k12    " ];
console.log(tempArray.trueLength(tempArray[0]));