// // var  - global scope (Accessing)
// var name="varun"; // Variable Name | variable value
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// function printValue() { console.log(name); }
// printValue()

// Data types
/**
 * Primitiveh
 * Non-Primitive / Reference Type
 */

let isUserLoggedIn = true;
isUserLoggedIn = false; // Direct : memory value updated
console.log(isUserLoggedIn);

// Reference
let person = {
  name: "varun",
  age: 12,
  qualification: "12th Grade",
};
console.log(typeof person);
console.log(person);

let user = person;

console.log(user);
user.name = "Kumar";
console.log(person);
console.log(user);

let name = "varun";

let username = name;

let personName = name;

console.log(username);
username = "kumar";

// After the update
console.log(name);
console.log(username);
console.log(personName);
