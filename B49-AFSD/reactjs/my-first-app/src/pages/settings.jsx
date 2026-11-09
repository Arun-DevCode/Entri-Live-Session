import { Outlet } from "react-router";

export default function settings() {
  return (
    <div>
      <h1>Welcome to Settings Page</h1>
      {/* Child Layout */}
      <Outlet />
    </div>
  );
}
