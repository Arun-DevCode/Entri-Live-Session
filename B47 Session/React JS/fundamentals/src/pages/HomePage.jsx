import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link to={"/search"}>Go to Search</Link>
    </div>
  );
}

export default HomePage;
