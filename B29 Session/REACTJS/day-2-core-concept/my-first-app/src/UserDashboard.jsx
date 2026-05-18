import React from "react";
// import Profile from "./Profile"; // component or function
import { Profile, Users } from "./Profile";// Profile : JSX , User:JSX

function UserDashboard() {
  //   Profile();
  return (
    <div>
      <h1>Welcome to User Dashboard</h1>
      <Profile />
      <Users/>
    </div>
  );
}

export default UserDashboard;
