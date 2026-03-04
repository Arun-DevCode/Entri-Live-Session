import { useState } from "react";

function ProfilePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserProfileUpdate = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = { username, password };
    console.log(formData);

    try {
      const response = await fetch(
        "https://68a7fb1ebb882f2aa6dcfd15.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("User data stored successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to store user data!");
    }
  };

  return (
    <>
      <form onSubmit={handleUserProfileUpdate}>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-2 my-12 rounded text-white"
        >
          Update Profile
        </button>
      </form>
    </>
  );
}

export default ProfilePage;
