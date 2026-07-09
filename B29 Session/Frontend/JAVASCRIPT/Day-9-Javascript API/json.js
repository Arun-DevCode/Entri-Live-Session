// JSON
// Method of function :
// 1 . stringify - Object -> JSON
// 2. parse - JSON -> Object

const person = {
  name: "varun",
  email: "varun@gmail.com",
  password: "varun@2026",
};

// Convert : Object -> JSON(STRING)
const jsonData = JSON.stringify(person);
console.log(JSON.stringify(person));

// Parse : JSON(String) -> Object
console.log(typeof JSON.parse(jsonData));

// JSON -> TOON
