import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GetStarted />
      {/* <WhyUS />
      <Collections />
      <Features />
      <CTA />
      <Footer /> */}
    </div>
  );
}

export default App;
