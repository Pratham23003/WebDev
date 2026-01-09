//count how many nums bw 1-100 are divisible by both 3 & 5
let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%3 === 0 && i%5 ===0) ++count;
}
console.log(count);