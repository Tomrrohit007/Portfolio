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

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="relative z-0 hero-cont px-12 md:px-[60px] lg:px-[90px] pb-9">
        <Hero />
        <About />
        <Tech/>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
