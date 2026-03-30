// For loop statement

/*
  for(value , condition , increment)

  Value - decides where loop starts
  condition - When condition meet(compare) the process get start or loop terminate(stop)
  increment - to run the process until it get terminate
*/
// let i = 0;
// for(i;i<100;){
//     i+=5;// i = 5 + 5
//     // write statement
//     if(i===100){
//       console.log("Loop reached the condition!")
//     }
//     console.log(i);
// }

// while loop
// let i =1;
// while(i<=5){
//     if(i===6){
//       console.log("Loop reached condition and terminated!")
//     }
//     console.log(i)
//     i++;
// };

// do..while loop statement
// let i = 1;
// do{
//   console.log(i);
//   i++
// }while(i<=5); // false

// Continue statement
// for(let i = 1; i<=5 ; i++){
//     console.log("Before continue",i)

//     // if(i===3){
//     //     console.log("Condition reached 3");
//     //     continue
//     // }
//     console.log(i)
//     if(i===4){
//       break;
//     }
//     console.log("After continue",i)
// };


// Modern Loops in js

// 1. forEach - it runs for each value (call);

/*
  forEach(function)
  type of function - arrow function
*/
// let total = 0;

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Result of total number is ?

// numbers.forEach(function repeat(value) {
//   console.log(value*2)
// });


// const userslist = ["Ajith", "Banu", "Ciran"];

// function findUser(username){
//   if(username=="Ajith"){
//      console.log("User Found in the list!", username)
//   }
// }

// userslist.forEach(findUser);