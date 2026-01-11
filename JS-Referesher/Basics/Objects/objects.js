const users = [
  { name: "Aman", age: 20 },
  { name: "Riya", age: 25 },
  { name: "Raj", age: 18 },
  { name: "Neha", age: 30 }
];

//get array of names
// let arrayOfName = users.map((key) => {
//     return(key.name);
// })
// console.log(arrayOfName);

// let ageOlderThan21 = users.filter((key) => {
//     if(key.age>21) return key.name;
// });
// console.log(ageOlderThan21);

// let totalAge = users.reduce((acc,val) => {
//     return acc+val.age;
// },0);
// console.log(totalAge);

let oldestUser = users.reduce((acc, val) => {
  if (val.age > acc.age) {
    return val;
  } else {
    return acc;
  }
}, users[0]);

console.log(oldestUser);
