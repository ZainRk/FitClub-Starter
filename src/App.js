import { useState } from "react";
import "./App.css";
import {
  Hero,
  Programs,
  Reasons,
  Plans,
  Testimonials,
  Join,
  Footer,
  Navbar,
} from "./components";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <Navbar active={active} setActive={setActive} />
      <Hero active={active} setActive={setActive} />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
