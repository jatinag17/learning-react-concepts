import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *    - Logo
 *    - Nav Items
 *  Body
 *    - Search
 *    - Restaurant Container
 *        - Image
 *        - Name of Restaurant, Rating, Cuisines, Delivery Time
 *  Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 */
const Header=()=>
{
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout=() =>
{
  return(
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
