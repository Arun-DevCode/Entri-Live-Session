// Operators
// 1. arithmetic
let a = 10;
let b = "10";

// console.log(a + b); // operand : a , b, - operator : +
// console.log(a - b); // operand : a , b, - operator : -
// console.log(a * b); // operand : a , b, - operator : *
// console.log(a / b); // operand : a , b, - operator : /
// console.log(a % b); // operand : a , b, - operator : %

// 2. comparison
// 1. loosely compare - without type
console.log(a == b);

// 2. strict compare - with type
console.log(a === b);

// 3. Not equal - with type & without type
console.log(a != b); // without type
console.log(a !== b); // with type

// 4. Logical Operator
if (a && b) {
  console.log(b && a);
}

if (a || b) {
  console.log(b && a);
}

const A = false;
console.log(!A);
if (!A) {
  console.log(b && a);
}
