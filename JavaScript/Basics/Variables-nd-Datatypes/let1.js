// let - variable declaration method

//global scope
let globalLet = "I'm global let!";
console.log(globalLet);

function exampleLetScope() {
  let functionLet = "I'm function scoped let!";
  console.log(functionLet);

  if (true) {
    let blockLet = "I'm block-scoped let!";
    console.log(blockLet);
  }
  console.log(functionLet);
  console.log(blockLet); // this gonna throw an error
}
exampleLetScope();

//re-declaration not possible
//re-assignment example
let count = 0;
console.log(count);
count = 1;
console.log(count);
