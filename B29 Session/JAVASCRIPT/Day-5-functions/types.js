// Types of functions in JS

// 1. function - Named

/*
  function name(){
   statements
  }
*/
// Function Declaration
function greets(){
  console.log("Hello");
}

// Function - Direct call or reference call
greets(); // direct call
greets; // reference call (yet to be call)

// Anonymous Function

/*
  const name = function(){
   statements
  }
*/

// Arrow Function

/*
  const name = ()=>{
   statements
  }
*/

// IIFE - Immediately Invoked Function

/*
   (function expression)()
*/


// HOC - Higher Order Function

/*
   function calculator(callback){
     
   }

   callback - parameter receive function as argument
*/ 

// Types of functions in JS

// 1. function - Named

/*
  function name(){
   statements
  }
*/
// Function Declaration
function greets() {
  console.log("Hello");
}

// Function - Direct call or reference call
// greets(); // direct call
// greets(); // reference call (yet to be call)

// Anonymous Function

/*
  Syntax : 
  
  const name = function(){
   statements
  }

  expression - function(){
   statements
  }
*/

const name = function (status) {
  console.log("Hello Everyone..");
  return status;
};

//  name = "hello";

// console.log(name("working.."));

// Arrow Function

/*
  const name = ()=>{
   statements
  }
*/
// Arrow Function + Parameterization
const isUserLoggedIn = status=>status;

console.log(isUserLoggedIn("pending"))

// isUserLoggedIn("User Logged In Success");// working
// isUserLoggedIn(); // undefined

// IIFE - Immediately Invoked Function Expression

/*
   ()()
*/
// const today = ()=>{
//     console.log("working")
//   return "07/04/2026"
// };

// today()

// (() => {
//   console.log("working");
//   return "07/04/2026";
// })();

// HOC - Higher Order Function

/*
   function calculator(callback){
     
   }

   callback - parameter receive function as argument
*/

// function calculator(a){
//     console.log(typeof a);// callback
//     return a();// result function(reference) -> 11
// }

// calculator()
// calculator(); // Parameters is undefined -> NaN
// const result = ()=>{
//     return 5+6
// }

// Direct Call
// console.log(calculator(result));// NaN - not a number

// HOF - Higher order function

// function calculator(x, y) {
//   return () => {
//     return x + y;
//   };
// }

// const result = () => {
//   return 4
// };
// console.log(result())

// console.log(calculator(5,4)())


// Parameter + Function

function addition(a,b){
    // console.log(a)
    // console.log(value)
    if(a&&b){
      return a+b
    }
   return "Please provide two number..";
}

// REST OPERATOR - ...
const result = addition(6,11);
console.log(result)
// Looping - Iteration
// for(let val of result){
//     console.log(val);
// }