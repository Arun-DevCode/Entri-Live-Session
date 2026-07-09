// Javascript Reference types

// 1. object - key : value

// const person = {
//   name: "varun",
//   age: 42,
//   gender: "male",
//   qualification: [
//     {
//       name: "Master in CSE",
//       date: "15/06/30",
//     },
//     {
//       name: "Bachelor",
//       date: "12/04/2026",
//     },
//   ],
// };

// console.log(person);

// 2. Array - 2D Array (Directly store value inside array)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let strings = ["1", "2", "3", "4", "5"];

// console.log(numbers)
// console.log(strings)

// Mixed up - values
const person = [
  "varsha",
  24,
  [
    {
      name: "Master in CSE",
      date: "15/06/30",
    },
    {
      name: "Bachelor",
      date: "12/04/2026",
    },
  ],
  { isCompleted: true },
];

// console.log(person)

// C - Create , R - read , U - Update , D- Delete - Manipulation

// 3. Function - Recursive (Repeat the process) By calling

// Step 1 : Function Declaration (Create a Function)
// Syntax : Parenthess - ()

// Receive values - Parameter -> key = value

// function helper(price1,price2,price3){
//     console.log(price1)
//     console.log(price2);
//   let a = price1;
//   let b = price2;
//   let d=price3;
//   let c = a+b+d;// NAN
//   console.log(c);
// }

// helper()
// helper(50,100); // arguments
// helper()
// helper(50)

// Maths

// Reuse variable
// Reuse the process / call the process -again and again
// let price1;
// let price2;
// console.log(price1 + price2) ; // Not a Number
