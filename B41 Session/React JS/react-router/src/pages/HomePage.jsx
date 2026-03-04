import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        possimus placeat? Officia inventore esse ea laboriosam dolores, quas
        quam dicta porro a! Consequatur tempora amet deserunt omnis placeat!
        Consectetur, quod.
      </p>

      <Link to={"/product"}>Go to Product Page</Link>
    </div>
  );
}

export default HomePage;
