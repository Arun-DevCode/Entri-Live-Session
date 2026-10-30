import Footer from "../components/Home/Footer";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Home/Navbar";

export default function Home() {
  console.log("Component Rendered");
  return (
    <div>
      <Navbar />
      <h1>Welcome to Home Page</h1>
      {/* <HeroSection /> */}
      <Footer />
    </div>
  );
}
