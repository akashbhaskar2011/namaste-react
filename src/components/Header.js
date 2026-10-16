import { useEffect, useState } from "react";
import LOGO_URL, { LOGO_URL2 } from "../utils/constancts";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setButtonReact] = useState("login");

  const onlineStatus = useOnlineStatus();



  useEffect(() => {}, []);
  return (
    <div className="header">
      <div>
        <Link to={"/"}>
        <img className="logo" src={LOGO_URL2}></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>online Status: {onlineStatus? "✅" :"❌"}</li>
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
            <Link to="/grocery" className="header-link">Grocery</Link> 
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
