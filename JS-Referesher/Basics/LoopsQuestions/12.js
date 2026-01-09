// go from 1 to 100 print only 5 odd nums then stop the loop
let count = 0;
for(let i = 1; i <= 100; i++){
    
    if(i%2 != 0){
        console.log(i);
        count++;
    }
    if(count == 5) break;
} 
let sentence = "Javascript is awesome!";
