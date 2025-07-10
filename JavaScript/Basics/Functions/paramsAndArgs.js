//parameters and arguments

// arrow function with no parameters
const showTime = () => {
    let now = new Date();
    console.log("Current Time: ", now.toLocaleTimeString());
}
showTime();

//default parameters 
function sayHello(name = "Guest", greeting = "sup dawg"){
    console.log(`${greeting}, ${name}`);
}
sayHello("Kaalu");
sayHello();
sayHello(undefined, "Hola");

//Rest Parameters 
function sumAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
console.log(sumAll(1,2,3,4,5,6,7,8));