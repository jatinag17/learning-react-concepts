import { LOGO_URL } from "../utils/constants";
import "../../index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  // let btnName="login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");
  //if there is no dependency array then useEffect is called after every render
  //if dependency array is empty then useEffect is called only on initial render
  //if we put something in dependency array then useEffect is only called when dependency changes
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
const onlineStatus=useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status:{onlineStatus ? "✅":"❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact);
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
