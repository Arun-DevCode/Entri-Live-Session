// API URL
const API_URL = "https://6a8db861baf2ac84246d632e.mockapi.io/users";

// Select : Choose elements
const ProfileContainer = document.getElementById("User-Profile");
const form = document.getElementById("form");
const formFields = document.querySelectorAll("input");

// read : list out users
function displayUsers(Users) {
  if (Users.length === 0) {
    return console.log("No Users Found!");
  }

  // Profile Card - HTML
  for (const user of Users) {
    const ProfileCard = document.createElement("div");
    //Append : Children
    ProfileContainer.appendChild(ProfileCard);

    ProfileCard.innerHTML = `
     <h3>${user.Name}</h3>
     <p>${user.email}</p>
     <button>Edit User</button>
     <button>Remove User</button>
    `;

    // Add : Class Name to Profile card
    ProfileCard.className = "Profile-Card";

    // Profile card : style
    // const style = {
    //   border: "1px solid gray",
    //   backgroundColor: "white",
    // };
  }
}

// Create : Post user data
async function CreateUser(Data) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    console.log(res);
  } catch (error) {
    console.error("Failed to create user!");
  }
}

// Form : Submission
const UserData = {};

function inputChange(e) {
  UserData[e.target.Name] = e.target.value;
}

for (const input of formFields) {
  input.addEventListener("change");
}

form.addEventListener("submit", () => {});

async function getAllUsers() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    displayUsers(data);
  } catch (error) {}
}

getAllUsers();
