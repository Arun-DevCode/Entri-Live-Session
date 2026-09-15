import { Outlet } from "react-router";

function AdminDashboard() {
  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default AdminDashboard;
