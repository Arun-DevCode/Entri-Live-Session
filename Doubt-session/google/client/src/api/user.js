const URL = `https://69a7ed0b37caab4b8c6019b9.mockapi.io/users`;

// To Create User Account
export const CreateAccount = async (UserData) => {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(UserData),
  });

  // conversions
  const data = await res.json(); // JSON -> Object

  return data;
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
