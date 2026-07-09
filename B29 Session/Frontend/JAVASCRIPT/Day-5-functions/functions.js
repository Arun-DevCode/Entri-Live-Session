// Calculation - Sum
let a = 10;
let b = 20;
let c = a + b; // sum expression

console.log(c);

// Function declaration

function myFun(name = "Guest User", age = null) {
  // write statement - block of code.
  console.log(name);
  console.log(age);
}

myFun(true, 5);

// Parameter - storing collection data in form of variable (name , value)

function addTwoNumber(x, y) {
  console.log(x); // 1 statement
  console.log(y); // 2 statement
  console.log(x + y); // 3 statement
  return x + y; // 4th statement
}

// NaN - Not a Number
const total = addTwoNumber(5, 6);
addTwoNumber(10000000, 50000000);
addTwoNumber(2, 3);
addTwoNumber(10, 20, 30);
console.log(total); // 11

// var val = 25;

// console.log(val);
