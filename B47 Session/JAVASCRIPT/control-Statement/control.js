//conditional Statements

/*
  if(){
   statements
  }
*/
let mark = 350;

// if(mark===35){
//   console.log("Pass")
// }

// if(mark===35){
//   console.log("Pass")
// }else{
//   console.log("Fail")
// }

// If..else - else..if

const score = 10;

//FIRST APPROACH
// if(score<35){
//   console.log("D")
// }else if(score>=45 && score<=60){
//     console.log("B")
// }else if (score >= 61 && score < 75) {
//   console.log("A");
// }else if (score >= 75 && score <= 90) {
//     console.log("S")
// }else if (score > 90 && score <= 100) {
//   console.log("O");
// }

// SECOND APPROACH

// syntax :

/*
  switch(){
    case value;
    default
  }
*/

switch (score) {
  case 10:
    console.log("Fail");
    break;
  case 20:
    console.log("Need improvement");
    break;
  case 30:
    console.log("Still need improvement");
    break;
  default:
    console.log("Please provide number between 10 to 30 only!");
}
