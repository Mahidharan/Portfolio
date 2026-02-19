import { BrowserRouter } from "react-router-dom";
import CursorFollower from "./components/CursorFollower";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden w-full">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <StarsCanvas />
          <Navbar />
          <CursorFollower />

          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
