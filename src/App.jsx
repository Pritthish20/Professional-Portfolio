import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  End,
  StarsCanvas,
  TowerCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0">
          <Navbar />
          <Hero />
          <StarsCanvas/>
          <TowerCanvas />
          <About />
          <Tech />
          <Works />
          <Contact />
          <End/>
        </div>
        <div className="relative z-0">
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
