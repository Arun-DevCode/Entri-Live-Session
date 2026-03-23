const URL = `https://api.sheety.co/162f493f4e3d1d0bfa8954bc380cf62b/recipeFinderApp/accounts`; // GET

// Create User Account
export const createAccount = async (userData) => {
  const body = {
    account: userData,
  };

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error creating account:", error);
  }
};

// To Login User to authenticate (Verify)
export async function LoginUser(userEmail) {
  const res = await fetch(
    `https://69a7ed0b37caab4b8c6019b9.mockapi.io/users?email=${userEmail}`,
  );

  // conversions
  const data = await res.json(); // JSON -> Object

  return data[0];
}
