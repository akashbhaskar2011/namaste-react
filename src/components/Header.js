import { useState } from "react";
import LOGO_URL, { LOGO_URL2 } from "../utils/constancts";

const Header = () => {
  const [btnNameReact, setButtonReact] = useState("login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL2}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>about us</a>
          </li>
          <li>
            <a>contact</a>
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
