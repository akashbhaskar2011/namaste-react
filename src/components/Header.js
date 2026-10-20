import { useContext, useEffect, useState } from "react";
import LOGO_URL, { LOGO_URL2 } from "../utils/constancts";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setButtonReact] = useState("login");

  const onlineStatus = useOnlineStatus();

const {logggedInUser} = useContext(UserContext)

//selector
const cartItems = useSelector((store)=> store.cart.items);
//subscribing to the store using selctor 

console.log(cartItems)

console.log(logggedInUser)

  useEffect(() => {}, []);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
      <div className="logo-container shrink-0">
        <Link to={"/"}>
        <img className="logo h-11 w-11 rounded-full object-cover ring-2 ring-[#fc8019]" src={LOGO_URL2}></img>
        </Link>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex items-center gap-3 px-0 text-sm font-semibold text-[#3d4152] sm:gap-6">
          <li className="hidden rounded-full bg-gray-100 px-3 py-1 text-xs sm:block">{onlineStatus ? "● Online" : "● Offline"}</li>
          <li>
          <Link to="/" className="header-link transition hover:text-[#fc8019]">Home</Link> 
          </li>
          <li className="hidden sm:block">
            <Link to="/about" className="header-link transition hover:text-[#fc8019]">About us </Link> 
          </li>
          <li className="hidden md:block">
            <Link to="/contact" className="header-link transition hover:text-[#fc8019]">Contact</Link> 
          </li>
           <li className="hidden md:block">
            <Link to="/grocery" className="header-link transition hover:text-[#fc8019]">Instamart</Link> 
          </li>
          <li className="hidden sm:block" >
            <Link to="/cart" className="transition hover:text-[#fc8019]">Cart {cartItems.length}</Link>
          </li>
           <li className="hidden sm:block">
            <a className="transition hover:text-[#fc8019]">{logggedInUser}</a>
          </li>
          <button 
            className="login-btn rounded-lg border border-[#fc8019] bg-[#fc8019] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#e66f11] sm:px-4"
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
    </header>
  );
};

export default Header;

// Changes made: styled navigation as a responsive, sticky Swiggy-inspired header; state and links are unchanged.
