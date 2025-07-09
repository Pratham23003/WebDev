//while
let i = 1;
while (i < 5) {
  console.log("Inside the loop.");
  if (i == 3) {
    console.log('Skipping the iteration');
    i++;
    continue;
  } 
  else 
    console.log("Hi");
  i++;
}
