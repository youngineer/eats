import {LOGO_URL} from "../../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isLogged, setIsLogged] = useState("false");
    const [btnName, setBtnName] = useState("Login");

    const toggleBtnName = () => {
        if (isLogged){
            setBtnName("Logout");
        } else {
            setBtnName("Login");
        }
        setIsLogged(!isLogged);
    };

    return(
        <div className="header">
            <div className="logo">
                <Link to={"/"}><img src= {LOGO_URL}/></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to={"/"} className="login-btn">Home</Link>
                    <Link to={"/about"} className="login-btn">About</Link>
                    <Link to={"/contact"} className="login-btn">Contact Us</Link>
                    <Link to={"/cart"} className="login-btn">Cart</Link>
                    <button className="login-btn" onClick={toggleBtnName}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;