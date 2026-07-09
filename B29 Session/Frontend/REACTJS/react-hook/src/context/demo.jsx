import { useContext } from "react";
import userContext from "./Context";

export default function demo() {
  const userData = useContext(userContext);
  console.log(userData);
  return (
    <div>
      <h1>Demo Component</h1>
    </div>
  );
}
