const course_details = {
  title: "AI Course",
  students: [
    {
      name: "Manimaran",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
    {
      name: "Poojitha",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
    {
      name: "Jannath",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
    {
      name: "Santhosh D",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
  ],
};

const students_details = structuredClone(course_details.students);

//Update
students_details[2].skills[2] = "Javascript";

console.log(students_details[2]);

console.log(course_details.students[2]);

var person = {
  name: "Krishana",
  age: 24,
  qualification: "M.Sc",
  projects: {
    title: "AI Project",
    author: "Naveen",
  },
};

// console.log(person.name)
// console.log(person.qualification)

console.log(person["name"]);
console.log(person["age"]);
console.log(person["qualification"]);

// Type verification
console.log(typeof person);

// Operations in Object

// Add
person["Profession"] = "Sr. Full Stack Engineer";
person["Experience"] = 7;

//Update
person["Experience"] = 8;

// Delete
// delete person["name"]

// console.log(person.projects.title)
// console.log(person["projects"].author)

const course_details = {
  title: "AI Course",
  students: [
    {
      name: "Manimaran",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
    {
      name: "Poojitha",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
    {
      name: "Jannath",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
    {
      name: "Santhosh D",
      skills: ["HTML", "CSS"],
      project: {
        title: "AI Project - Gemini",
        desc: "AI Resume evaluator using Gemini",
      },
    },
  ],
};

let students_details = [...course_details.students];

//Update
students_details[2].skills[2] = "Javascript";

console.log(students_details[2]);
console.log(course_details.students[2]);