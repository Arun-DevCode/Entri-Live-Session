// Promise

// 1. create promise instance
const taskOne = new Promise((resolve, reject) => {
  const isSuccess = false;

  if (isSuccess) {
    resolve(() => console.log("Task One is Completed.."));
  } else {
    reject(() => console.log("Failed to complete task one!"));
  }
}); // callback -> named or expression

console.log(taskOne);

// promise handling - .then() .catch()
taskOne.then((callback) => callback()).catch((error) => error());

// methods
// 1. Promise.all
// 2. Promise.race
// 3. Promise.any
// 4. Promise.allSettled

// 1. Promise.all -
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then((results) => console.log(results)) // ["A", "B", "C"]
  .catch((err) => console.error(err));

// 2. Promise.race - First one win
const p1 = new Promise((res) => setTimeout(() => res("Fast"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("Slow"), 2000));

Promise.race([p1, p2]).then((result) => console.log(result)); // Fast

// 3. Promise.any -
const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success");
const p3 = Promise.reject("Fail 2");

Promise.any([p1, p2, p3]).then((result) => console.log(result)); // Success

// 4. Promise.allSettled - Success + failure
const p1 = Promise.resolve("Done");
const p2 = Promise.reject("Error");

Promise.allSettled([p1, p2]).then((results) => console.log(results));
