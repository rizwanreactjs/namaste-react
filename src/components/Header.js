import { useState } from "react"
import { HEADER_LOGO } from "../utils/constant"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginStatus,setLoginStatus] = useState("Login")
    const onlineStatus = useOnlineStatus()

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
              <img className="w-48" src={HEADER_LOGO}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus?"Online" : "Offline"}
                    </li>
                    <li className="px-4">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">Cart</li>
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