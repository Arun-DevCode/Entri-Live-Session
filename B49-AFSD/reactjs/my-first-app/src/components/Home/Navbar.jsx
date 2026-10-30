import HeroSection from "./HeroSection";

export default function Navbar() {
  const username = "Santhosh";

  const isUserLoggedIn = false;

  const pTag = <p>Login</p>;
  const spanTag = <span>Arun</span>;

  window.addEventListener("load", () => console.log("Page Refresh"));
  return (
    <div>
      <h1>Navbar</h1>
      {isUserLoggedIn ? spanTag : pTag}
      {/* <HeroSection
        name={username}
        age={12}
        users={[{ name: "Arjun", age: 12 }]}
        message={() => console.log("Am function")}
      /> */}
    </div>
  );
}
