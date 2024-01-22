import { useState } from "react"
import { HEADER_LOGO } from "../utils/constant"
import { Link } from "react-router-dom";

const Header = () => {
    const [loginStatus,setLoginStatus] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src={HEADER_LOGO}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About Us</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        if(loginStatus === "Login"){
                        setLoginStatus("Logout");
                        }else{setLoginStatus("Login");}
                        }}>{loginStatus}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header