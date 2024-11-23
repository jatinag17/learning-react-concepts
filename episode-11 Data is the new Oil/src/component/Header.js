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
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-teal-100 shadow-xl mb-5">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-6 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
