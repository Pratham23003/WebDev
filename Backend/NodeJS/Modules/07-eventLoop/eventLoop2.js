const fs = require('fs');
const a = 100;

setImmediate(() => {console.log('setImmediate')});

Promise.resolve().then(() => console.log("Promise Resolved"));

fs.readFile('./file.txt', 'utf-8', () => {
    console.log("File Reading CB");
})

setTimeout(()=>(console.log('timer expired')), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA(){
    console.log('A =', a);
}
printA();

console.log("Last line of the code.");
