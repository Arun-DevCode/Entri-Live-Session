import React from "react";
import { Link } from "react-router";

export default function RemoteToysPage() {
  return (
    <div>
      <h1>Welcome to remote toys page</h1>
      <div className="flex flex-col gap-2.5">
        <h1>Caddle Car Remote Car</h1>
        <a href="http://localhost:5173/caddle-toes-rock-car-spring-wheels">
          View Details
        </a>
        <Link to={"/caddle-toes-rock-car-spring-wheels"}>View Details</Link>
      </div>
    </div>
  );
}
