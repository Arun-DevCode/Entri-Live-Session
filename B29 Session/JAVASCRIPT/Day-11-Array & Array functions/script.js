const arr = [10, 20, 30, 40, 50];

// formula = maxNumber - minNumber
// Position / indexing - array value

// index number -> 0,1,2 (Position Value)

// Array access
//1 . indexing
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[1]);

// Without Built-in
let length = 0;
for (let value of arr) {
  console.log(value);
  length++;
}
console.log(length);

// With Built-in - Functions/Property
console.log(arr.length);

// Array functions
// 1. Adding & Deleting value - array
// Add - at last of an array - end
// Fill in - push
arr.push(60);
console.log(arr);

// Fill out - Pop (Removing a value last in an array)
arr.pop();
console.log(arr);

// Modern way :
arr.unshift(5); //value
arr.unshift(5); //value
console.log(arr);
arr.unshift(15);
console.log(arr);

// remove at start - index at 0
arr.shift(); // position value
console.log(arr);
arr.shift(); // position value
console.log(arr);
console.log(arr.length);
console.log((arr[3] = 55));

console.log(arr);

// Modify array - Update / Get
console.log(arr.slice(0, 2));
console.log(arr.splice(4, 1));

// String Methods
const str = "EVERYONE"; // ENOYREVE

let lenStr = 0;
for (let value of str) {
  console.log(value);
  lenStr++;
}
console.log(lenStr);

console.log("Hi" + "Everyone");

// With Built-in Methods/function
console.log(str.length);
console.log(str.charAt());
console.log(str.concat(` Thank You`));

// example
let name = "Entri App";
console.log(name.length);
console.log(`${name.charAt()}${name.charAt(6)}`);

// splitting & cutting values - in string
const whiteSpaceValue = ["E", "n", "t", "r", "i", " ", "A", "p", "p"];
console.log(name.split(" "));
const splittedValue = name.split(" ")[1];
console.log(splittedValue);

// Join - Combine / merge
// const splittedValue = name.split(" ");
// let firstname = "Varun";
// let lastName = "Kumar"
// console.log([444,55,66].join(" "));

// function printNumbers(...char){
//     console.log(char);
// }

// printNumbers(1,2,3,4,5)
// printNumbers("Entri","App")

// let num = ''
// num+=5
// console.log(num)

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = [...oneToTen, 11];
console.log(array);
// console.log()

console.log([10, 20, 30].map((x) => x * 2));
