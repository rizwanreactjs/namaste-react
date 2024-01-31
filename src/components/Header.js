import { useState, useContext } from "react"
import { HEADER_LOGO } from "../utils/constant"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginStatus,setLoginStatus] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext)
    
    //Subscribing to store using selector
    const cartItems = useSelector((store) => store.reducer.items)
    console.log("Cart Items")
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
              <img className="w-48" src={HEADER_LOGO}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus?"✅" : "🔴"}
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
                    <li className="px-4 font-bold text-lg">
                    <Link to = "/cart">Cart ({cartItems.length} items)</Link>
                        
                    </li>
                    <button className="login" onClick={() => {
                        if(loginStatus === "Login"){
                        setLoginStatus("Logout");
                        }else{setLoginStatus("Login");}
                        }}>{loginStatus}
                    </button>
                    <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header