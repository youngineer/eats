import {LOGO_URL} from "../../utils/Constants";
import { useEffect, useState } from "react";

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
                <img src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={toggleBtnName}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;