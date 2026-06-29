const fs = require('fs');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Explored"));

Promise.resolve().then(() => console.log("Promise Resolved"));

fs.readFile("./file.txt", "utf-8", () => {
    setTimeout(() => console.log("2nd Timer"), 0);
 
    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log('setImmediate 2'));

    console.log('File Reading CB');
});

process.nextTick(() => console.log('nextTick'));
console.log("Last line of the file");


