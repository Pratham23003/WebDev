const user = {
  name: "Aman",
  age: 20,
  city: "Delhi",
  isStudent: true
};
console.log(user.name);
console.log(user["city"]);
user.age = 21;
console.log(user.age);
user["college"] = "GGI";
console.log(user.college);
delete user.city;
console.log(user);