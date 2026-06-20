// BASE URL
const BASE_URL = "https://6a01a69636fb6ad04de15ed1.mockapi.io/users";

// fetch user info : return user profile
async function GetUserProfile(userId = null) {
  try {
    // validation
    if (!userId) {
      throw new Error("failed to fetch user. Please provide valid user id!");
    }
    // fetch info
    const res = await fetch(`${BASE_URL}/${userId}`); // Get User Info
    if (!res.ok) throw new Error("failed to fetch user data!");

    // conversion : JSON -> Object
    const data = await res.json();

    return data;
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
}

// validate user : login
async function validateUserData(UserInfo) {
  try {
    // Destructure
    const { id } = UserInfo;
    const UserProfile = await GetUserProfile(id); // API User Info
    if (!UserProfile) {
      throw new Error("failed to validate user info! Try again later");
    }

    // Validate User info
    if (
      UserProfile.email !== UserInfo.email &&
      UserProfile.password !== UserInfo.password
    ) {
      return {
        message: "Invalid credentials",
        error: true,
        data: null,
      };
    }

    return {
      message: "User Login Success..",
      error: false,
      data: { ...UserProfile, password: null },
    };
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
}

// Element
const container = document.querySelector("div");
const status = document.querySelector("span");
console.log(status);

async function displayUserInfo() {
  try {
    const isUserLoggedIn = await validateUserData({
      name: "name 1",
      email: "email 1",
      password: "password 1",
      id: "1",
    });

    if (isUserLoggedIn.error) {
      throw new Error("failed to login user! Try later");
    }

    // Render : User Info
    const userName = document.createElement("h3");
    const emailId = document.createElement("p");

    // Update Text Content: elements
    const { name, email } = isUserLoggedIn.data;
    userName.textContent = name;
    emailId.textContent = email;
    status.textContent = "Logged In Success";

    // Attach with container
    container.appendChild(userName);
    container.appendChild(emailId);
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
}

// Validation start
displayUserInfo(); // Render User Info

// Validation Rule
// is Data received : true -> false -> no error
// is not data received : false -> true -> throw error
