// import "./App.css";
import Flipcard from "../components/Flipcard";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import "./Works.css";

function Works() {
  return (
    <div>
      <div className="color-qutoes">
        {/* <p>Hello</p> */}
        <section class="animation">
          <div class="first">
            <div>Carlos Córdova</div>
          </div>
          <div class="second">
            <div>Web Developer</div>
          </div>
          <div class="third">
            <div>Systems Engineer</div>
          </div>
        </section>
      </div>
      <div className="rows">
        <Link to="/works/1">
          <Flipcard text={"1"} img={logo} />
        </Link>
        <Flipcard text={"2"} img={logo} />
        <Flipcard text={"3"} img={logo} />
      </div>
    </div>
  );
}

export default Works;
