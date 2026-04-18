// Selecting Elements
const taskHeader = document.querySelector(".task-header");
const taskBody = document.querySelector(".task-body");

// Deconstruct Elements
const searchBar = taskHeader.children[0]; // input
const taskContainer = taskBody.children[1]; // div.task-container

// Create Elements
const list = document.createElement("ul");
const addBtn = document.createElement("button");
const editBtn = document.createElement("button");

addBtn.textContent = "Add Task";
editBtn.textContent = "Update Task";

// Append Elements
taskContainer.appendChild(list);
taskHeader.appendChild(addBtn);

// State
let inputState = "";
const taskList = [];
let editIndex = null;

// Collect input (real-time)
searchBar.addEventListener("input", (e) => {
  inputState = e.target.value;
});

// Add Task
addBtn.addEventListener("click", () => {
  if (!inputState) {
    return alert("Please provide task title");
  }

  taskList.push(inputState);

  displayTask(taskList);

  // Reset input
  searchBar.value = "";
  inputState = "";
});

// Display Tasks
function displayTask(taskData) {
  list.innerHTML = ""; // clear UI before rendering

  taskData.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      ${task}
      <button onclick="modifyTask(${index})">Edit</button>
      <button onclick="removeTask(${index})">Delete</button>
    `;

    list.appendChild(listItem);
  });
}

// Remove Task
function removeTask(id) {
  taskList.splice(id, 1); //array method splice(start,end)
  displayTask(taskList);
}

// Modify Task (Edit mode)
function modifyTask(id) {
  editIndex = id;

  const task = taskList[id];

  // Switch button
  taskHeader.removeChild(addBtn);
  taskHeader.appendChild(editBtn);

  // Fill input
  searchBar.value = task;
  inputState = task;
}

// Update Task
function updateTask() {
  if (editIndex === null) {
    return;
  }

  if (!inputState) {
    return alert("Please provide task title");
  }

  // update exist task by id
  taskList[editIndex] = inputState;

  // Reset state
  editIndex = null;
  searchBar.value = "";
  inputState = "";

  // Switch back button
  taskHeader.removeChild(editBtn);
  taskHeader.appendChild(addBtn);

  displayTask(taskList);
}

// Attach event to update button
editBtn.addEventListener("click", updateTask);
