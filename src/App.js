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
      {/* <div className="container"> */}
      <Route path="/jj-web" element={<Works />} />
      <Routes>
        <Route path="/jj-web/about" element={<About />} />
        <Route path="/jj-web/works" element={<Works />} />
        <Route path="/jj-web/works/1" element={<Work1 />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
