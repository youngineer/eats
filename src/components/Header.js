import { LOGO_URL } from "../../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  const toggleBtnName = () => {
    setBtnName(isLogged ? "Login" : "Logout");
    setIsLogged(!isLogged);
  };

  return (
    <div className="top-0 left-0 right-0 bg-orange-600  shadow-sm z-50 font-serif">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center text-slate-50 justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={LOGO_URL} alt="Logo" className="h-8 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center  text-sm">
              <span>{isOnline ? "🟢 Online" : "🔴 Offline"}</span>
            </div>
            <Link to="/" className="link link-underline link-underline-white text-white">
              Home
            </Link>
            <Link to="/about" className="link link-underline link-underline-white text-white">
              About
            </Link>
            <Link to="/contact" className="link link-underline link-underline-white text-white">
              Contact
            </Link>
            <Link to="/cart" className="link link-underline link-underline-white text-white">
              {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg> */}
              <span>Cart</span>
            </Link>
            <button
              onClick={toggleBtnName}
              className="text-sm bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition-colors"
            >
              {btnName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;