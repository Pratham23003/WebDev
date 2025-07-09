let age = 18;

if (age < 1) {
  console.log("Enter a valid age.");
} else if (age > 18) {
  console.log("You're an adult!");
} else if (age >= 13 && age <= 17) {
  console.log("You're a teenager!");
} else if (age < 13) {
  console.log("You're a kid!");
} else {
  console.log("You're exactly 18 — welcome to adulthood!");
}
