import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import x from "../img/x.svg";
import o from "../img/o.svg";
import logo from "../img/logo.svg";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isLinked, setIsLinked] = useState(false);

  return (
    <nav className="navigation">
      <div className="stick">
        <a href="/about" className="brand-name">
          {isNavExpanded && isLinked ? (
            <div
              style={{
                color: "black",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: "400",
                letterSpacing: 1.2,
                wordWrap: "break-word",
              }}
            >
              Jessica Jiang
            </div>
          ) : (
            <img src={logo} alt="" />
          )}
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            setIsLinked(!isLinked);
          }}
        >
          {isNavExpanded ? <img src={x} alt="" /> : <img src={o} alt="" />}
        </button>
      </div>
      <div className="inline">
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/about"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/works"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                WORKS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
