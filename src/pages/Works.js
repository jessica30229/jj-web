// import "./App.css";
import Flipcard from "../components/Flipcard";
import w1 from "../img/w1.svg";
import { Link } from "react-router-dom";
import "./Works.css";

function Works() {
  return (
    <div>
      <div className="color-qutoes">
        {/* <p>Hello </p> */}
        <section class="animation">
          <div class="first">
            <div>Hello! my name is Jessica Jiang.</div>
          </div>
          <div class="second">
            <div>I'm a developer who enjoys design.</div>
          </div>
          <div class="third">
            <div>I'm a designer who enjoys tech.</div>
          </div>
        </section>
      </div>
      <div className="rows">
        <Link to="/works/1">
          <Flipcard
            title={"Startup Speedup"}
            discription={"a playground for youth to verify dream ideas."}
            img={w1}
          />
        </Link>
        <Flipcard title={"Startup Speedup"} img={w1} />
        <Flipcard title={"Startup Speedup"} img={w1} />
      </div>
    </div>
  );
}

export default Works;
