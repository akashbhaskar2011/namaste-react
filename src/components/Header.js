import { useEffect, useState } from "react";
import LOGO_URL, { LOGO_URL2 } from "../utils/constancts";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setButtonReact] = useState("login");

  useEffect(() => {}, []);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL2}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/" className="header-link">Home</Link> 
          </li>
          <li>
            <Link to="/about" className="header-link">Aboutus </Link> 
          </li>
          <li>
            <Link to="/contact" className="header-link">Contact Us </Link> 
          </li>
          <li>
            <a>cart</a>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "login"
                ? setButtonReact("logout")
                : setButtonReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
