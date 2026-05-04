// Conditional statement
// 1. if statement
// if condition is true then execute statements
// If not then terminate

const isUserLoggedIn = true;
// // if(isUserLoggedIn){
// //   console.log("Your Account is found..");
// // };

// if(isUserLoggedIn){
//     console.log("Your Account is found..");
// }else{
//     console.log("No account found!");
// }
const date = new Date();
const today = date.getDay(); // 1
console.log(date.getFullYear());

switch (today) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thurs");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Sat");
    break;
  default:
    console.log("Please provide value from 1 to 7 to find your day in week!");
}
