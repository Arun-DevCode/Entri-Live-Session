import { Link } from "react-router";

function HomePage() {
  return (
    <div className="m-32">
      <h1 className="mb-12">Home Page</h1>
      <Link
        to={"/dashboard"}
        className="bg-blue-500 my-12 text-white rounded px-5 py-2"
      >
        Go to Dashboard Page
      </Link>
    </div>
  );
}

export default HomePage;
