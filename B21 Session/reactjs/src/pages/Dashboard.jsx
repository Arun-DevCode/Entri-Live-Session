import { Link, Outlet } from "react-router";

function Dashboard() {
  return (
    <div className="p-12">
      <h1>Dashboard</h1>
      <div className="flex gap-x-12">
        <nav className="my-12">
          <ul className="flex flex-col gap-y-5">
            <Link to={"/dashboard/overview"}>Overview</Link>
            <Link to={"/dashboard/assessment"}>Assessment</Link>
            <Link to={"/dashboard/profile"}>User Profile</Link>
            <Link to={"#"}>Settings</Link>
            <Link to={"#"}>Contact</Link>
          </ul>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
