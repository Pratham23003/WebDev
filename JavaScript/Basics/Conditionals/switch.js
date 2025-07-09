//switch case
let switchNum = 6;
let isWeekend;
if (switchNum >= 6){
    isWeekend = true;
}
switch (switchNum) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    if(isWeekend == true){
        console.log("It's the weekend!");
    }
    break;
  }
  case 7: {
    console.log("Sunday");
    if(isWeekend == true){
        console.log("It's the weekend!");
    }
    break;
  }
  default: {
    console.log("Enter a valid number :");
    break;
  }
}
