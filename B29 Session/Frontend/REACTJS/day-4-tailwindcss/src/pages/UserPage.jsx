// import React from "react";
// import { Fragment } from "react"; // Destructing

const Users = [
  {
    id: 1,
    name: "varun",
    age: 12,
    Role: "Junior Full Stack Engineer",
  },
  {
    id: 2,
    name: "Arivu",
    age: 25,
    Role: "Sr.Full Stack Engineer",
  },
  {
    id: 3,
    name: "Raj",
    age: 23,
    Role: "Architect Engineer",
  },
  {
    id: 4,
    name: "Arun Raj",
    age: 24,
    Role: "Product Engineer",
  },
  {
    id: 5,
    name: "Ajith",
    age: 30,
    Role: "Sr.Product Engineer",
  },
];

/*
 Max Indexing : 3
 Min Indexing : 0
 Length : 4
 Iteration : 1 (Object,index)-> rendering -> 2(Object) -> 3(Object)-> 4(Object)
*/

export default function UserPage() {
  function UserFeedback(username = "Guest user") {
    console.log(`${username} feedback sent..`); // Guest user feedback sent
  }

  // UserFeedback();
  return (
    <>
      {Users.map((employee, index) => {
        return (
          <div key={employee.id}>
            <h1>{employee.name}</h1>
            <p>{employee.age}</p>
            <p>{employee.Role}</p>
            <button
              className="bg-emerald-600 px-2 py-1 rounded text-white mt-2"
              onClick={() => UserFeedback(employee.name)}
            >
              Submit Feedback
            </button>
          </div>
        );
      })}
    </>
  );
}
