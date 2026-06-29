//event loop works in phases.
const fs = require('fs');
const a = 100;

setImmediate(()=> {console.log('setImmediate')}); // async -> offload to LibUV

fs.readFile("./file.txt", "utf8", () => { // async -> offload to LibUV
    console.log("File Reading CB");
});

setTimeout(()=>{console.log("Timer Expired")}); // async -> offload to LibUV

function printA(){
    console.log("A = ", a);
}
printA();

console.log("Last line of the file.")

