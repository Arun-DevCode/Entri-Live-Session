import { useContext } from "react";
import userContext from "./Context";

export default function userA() {
  const userData = useContext(userContext);
  console.log(userData);
  return (
    <div>
      <h1>User A Component</h1>
    </div>
  );
}
