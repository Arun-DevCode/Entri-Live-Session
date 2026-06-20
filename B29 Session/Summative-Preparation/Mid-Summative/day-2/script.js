const fruits = ["apple", "banana", "orange"];

/*
CRUD Operations : 

1. Create - Add 
2. Read - Get 
3. Update - Modify , Rewrite
4. Delete - Remove , clear , pop
*/

//* Add or create a fruit
function createFruit(val, At) {
  // Push
  if (At.toLowerCase() === "end") {
    fruits.push(val);
  } else if (At.toLowerCase() === "start") {
    // Unshift
    fruits.unshift(val);
  } else {
    console.log("Please provide start or end to insert your value into array?");
  }
}

// createFruit("mango", "start");

//* Read : Get all the fruits or for specific use index
console.log(fruits);

//* Update : Modify or edit
const search = "orange";

const newValue = "Berry";

fruits.forEach((fruit, index) => {
  if (search.toLocaleLowerCase() === fruit.toLocaleLowerCase()) {
    fruits[index] = newValue;
  }
});
console.log(fruits);

//* Delete : remove or clear

//! Randomly Remove from start or end
function removeFruit(At) {
  // Pop
  if (At.toLowerCase() === "end") {
    fruits.pop();
  } else if (At.toLowerCase() === "start") {
    // Shift
    fruits.shift();
  } else {
    console.log("Please provide start or end to remove your value from array?");
  }
}

// removeFruit("start");
// removeFruit("end");
console.log(fruits);

// ! Use Splice - specifically u can remove a value from the array
console.log(fruits);

function removeAFruit() {
  fruits.splice(1, 1);
}

removeAFruit();
console.log(fruits);

//* Try to cover this too
const fruits = ["apple", "banana", "orange"];

const value = fruits.slice(1, 2);
console.log(value);