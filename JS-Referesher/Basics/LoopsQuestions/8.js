//ask user for input and from 1 to that number check if it is even or odd
const val = window.prompt("Enter a num :");
for(let i = 1; i <= val; i++){
    if(i%2 == 0) console.log(`${i} is even`);
    if(i%2 != 0) console.log(`${i} is odd`);
}