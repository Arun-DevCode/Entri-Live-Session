import { useContext } from "react";
import userContext from "./Context";

export default function Profile() {
  const userData = useContext(userContext);
  const { user, setUser } = userData;

  function updateProfile() {
    setUser({
      name: "kavitha",
      email: "kavitha@gmail.com",
    });
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  );
}
