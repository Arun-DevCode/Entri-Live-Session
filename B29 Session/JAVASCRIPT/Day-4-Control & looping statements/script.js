// Conditional statement

// 1. if statement - check condition if it's tru only allow otherwise not allow
/* 
 if(condition){
    statement
 }
*/

// const age = 17; // alternative of var keyword

// if (age > 18 && age <= 35) {
//   console.log(age);
//   console.log("Your eligible for house loan..."); // statement 1
//   let a = 10; // statement 2
//   let b = 20; // statement 3
//   console.log(a + b); // statement 4
// }
// age=12;
// console.log(age);

// console.log("execution continues flow...");

// if..else statement
let age = 1;

if (age >= 25) {
  console.log("You are eligible for home loan...");
} else {
  console.log("Your are not eligible!!");
}

// if..else if statement

let mark = 12;

if (mark == 35) {
  console.log("B Grade");
} else if (mark >= 35 && mark <= 50) {
  console.log("A Grade");
} else if (mark >= 55 && mark < 75) {
  console.log("S Grade");
} else {
  console.log("You are failed. Please try again!!");
}

console.log("Execution continue..");

// Switch statement
/*
  switch(mark){
    case 35:
        console.log("B Grade");
    default:
        console.log("You failed!!")    
  }
 */
let mark = "admin"; // No Typing conversion

switch (mark) {
  case "admin":
    console.log("B Grade");
    break;
  case "user":
    console.log("A Grade");
    break;
  default:
    console.log("You failed!!");
}

console.log("execution continue...");
