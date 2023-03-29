import Tech from "./components/Tech";
import StarsCanvas from "./components/canvas/Stars";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative z-2 mt-10 hero-cont px-12 md:px-[60px] lg:px-[90px]">
        <Hero />
        <About />
        <Tech/>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact/>          
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
