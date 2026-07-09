// Arithmetic Operators

// +
let a = 10;
let b = 20;
const c = a + b;
console.log(c);
// -
let d = 20;
let e = 10;
const f = d - e;
console.log(f);

// *
let x = 10;
let y = 20;
const z = x * y;
console.log(z);

// / - Division
const result = a / b;
console.log(result);

// % - Modulus
const total = a % b;
console.log(total);

// **
console.log(a ** 3);


// Assignment Operators

// = - Assign

// let x; // Declare
// let x=10; 
// x=10
console.log(x);

// += 
// let a =100
// let y = 20; // Initialization
// y=y+a;// reassign : original
// y+=a; // reassign : shortcut
// y=y-a;
// console.log(y);
// y-=a;
// y*=a; // 20 * 100 -> 2000
// y/=a;
// y%=a
console.log(y);

// Comparison Operators

// == - Equal
console.log(5==5);
console.log(5==15);
console.log(5=="15");

console.log(5=="5");// Converted to number then compare will happen
console.log("5"==5); // Converted to String

// === - Strict Equal ( Check Type of Values & Values)

console.log(10===10);
console.log(10===5);
console.log(10==="10");
console.log("10"===10);

// ! - Not & == Equal -> !=
console.log(5!=10)
console.log(5!=5);

console.log(5!=="5");

// < & > (Greater than & Less than)
console.log(5<10);
console.log(15>10);

//example 
// let age = 18;
// console.log(age!=18);



// Logic Operators

// 1. AND - Operator

let age =18;
/*
  Conditions : 
  1. equal to 18 
  2. above 18
*/

console.log(age != 18 && age > 18);
console.log(age != 18);
console.log(age > 18);

// 2. || - OR Operator

console.log(age==18 || age>18);

// True  & false - AND
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(undefined && undefined);
console.log(undefined && false);
console.log(undefined && null);
console.log(undefined && '');
console.log(true && undefined);
console.log(true && null);
console.log('A'&&'a')

// True || false - OR 
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);


let name;
console.log(name)
const message = "You filled their name..";

console.log(name&&message);
console.log(message && name);



// Logic Operators

// 1. AND - Operator

let age =18;
/*
  Conditions : 
  1. equal to 18 
  2. above 18
*/

console.log(age != 18 && age > 18);
console.log(age != 18);
console.log(age > 18);

// 2. || - OR Operator

console.log(age==18 || age>18);

// True  & false - AND
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(undefined && undefined);
console.log(undefined && false);
console.log(undefined && null);
console.log(undefined && '');
console.log(true && undefined);
console.log(true && null);
console.log('A'&&'a')

// True || false - OR 
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log(true || true || true);
console.log(true || false || true);
console.log(true || false || false);
console.log(false || false || false);
console.log(false || true || true);
console.log(false || true || false);


// let name;
console.log(name)
// const message = "You filled their name..";

console.log(name&&message);
console.log(message && name);


// Example - OR

let year = 2010;
//             true         false        false
console.log(year==2010 || year>2010 || year != 2010);
console.log(year==2010);
console.log(year>2010);
console.log(year!=2010);

// let username = "";
// let password = ""
// let email = "";

// console.log(username || email || password);


// ! - Not

/*
  Yes - No
  Interested - Not Interested
  Like it - No like it.
*/

console.log(!true);
console.log(!false);

// Example 
// let x;
console.log(x);
console.log(!x); // defined - there is a value (undefined)

console.log(!x || "Please provide value for x");

// Unary Operator

// ++ - Increment (Pre & Post)
let total = 10;
console.log(total);
total++; // Post Increment (Not Immediately After);
++total; // Pre Increment - Increment value first (Immediately)
console.log(total);

// Post increment
let result = 20
// console.log(result++)
// console.log(result++)
console.log(result)

// Pre Increment
console.log(++result)
console.log(result++)
console.log(result);
result ="Hi"


// typeof - checking type of value in the variable

console.log(typeof result);
let age = '18';

// Before Check
console.log(typeof age);

// After check
console.log(age >=18 && typeof age === "number");
console.log(age >= 18);

// Ternary Operator - U turn

/*
  syntax : condition ? value1 : value2;
*/


let age = " "; // empty string
console.log("Condition is: ", age >= 18);

const isPersonEligible = age? "Eligible" : "Not Eligible"
console.log(isPersonEligible);