//trying to understand how asnyc and sync operations execute
const fs = require('fs');
const https = require('https');

console.log('running synchronusly....');                    //syncrhonous operation
var a = 120;
var b = 200;

https.get('https://dummyjson.com/products/1', (res) => {    //async
    console.log('data fetched success');
});

setTimeout(() => {                                          //async
    console.log('setTimeout called after 5 seconds')
}, 3000);

fs.readFile("./file.txt","utf8", (err, data) => {          //async
    console.log('File Data', data);
})

function multiplyNums(a,b){                                 //sync
    return a*b;
}
 
var c = multiplyNums(a,b);                                  //sync
console.log(c);                                             //sync
