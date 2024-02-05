import { Routes, Route } from "react-router-dom";
import Works from "./pages/Works";
import Work1 from "./pages/Work1";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar className="nav" />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/1" element={<Work1 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
