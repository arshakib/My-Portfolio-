import "./App.css";
import About from "./Component/About";
import EducationalQualification from "./Component/EducationalQualification";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navber from "./Component/Navber";
import Portfolio from "./Component/Portfolio";
import Stack from "./Component/Stack";

function App() {
  return (
    <>
      <Navber />
      <Hero />
      <About />
      <EducationalQualification />
      <Portfolio />
      <Experience />
      <Stack />
      <Footer />
    </>
  );
}

export default App;
