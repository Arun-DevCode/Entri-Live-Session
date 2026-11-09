import { useLocation, useNavigate } from "react-router";

export default function About() {
  const loc = useLocation();
  const navigate = useNavigate();

  const currentLoc = loc.pathname;
  const prevLoc = loc.state.from;

  // Go Back
  function goBack() {
    navigate("/");
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button onClick={() => navigate(-1)}>Back</button>
        <p>
          {prevLoc === "/" ? "Home" : "Unknown"}
          {currentLoc}
        </p>
      </div>
      <h1>Welcome to About Page</h1>
    </div>
  );
}
