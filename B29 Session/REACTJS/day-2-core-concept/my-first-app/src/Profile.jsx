import "./Profile.css";

//import styles
import { ButtonStyles, formStyles } from "./styles/ButtonStyles";

function Profile() {
  console.log("Profile ran");
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "42px" }}>Profile Page</h1>
      <button style={ButtonStyles}>Pay Now</button>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h1>User page</h1>
      <button style={ButtonStyles}>Click me</button>
    </div>
  );
}

export { Profile, Users };

// element.style.color - {{color:"red"}}
