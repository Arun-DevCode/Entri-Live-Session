const greetings = {
  formal: "Welcome",
  casual: "Happy to see",
  informal: "What's up",
};

const user = {
  name: "test",
  say: "Hi everyone",
  age: 22,
  greet: function () {
    return this.say;
  },
  experience: {
    freshers: {
      Designation: "Full Stack Engineer Intern",
      exp: 0,
      skill: ["HTML", "CSS"],
    },
  },
};

// Object Accessing
// 1. DOT Operator (.)
// console.log(user.experience?.freshers)

// 2. Key - object property / key name

// 3. indexing - ["keyname"]
console.log(user["experience"]["freshers"]["exp"]);
// Key/property - optional(?)
