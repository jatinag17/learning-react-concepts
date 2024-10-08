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
// const styleCard={
//   backgroundColor: "#f0f0f0",
// };
// we can also give css in js

const RestaurantCard=(props)=>{
  const {resName,cuisine,ratings,timing}=props;
  // console.log(props)
  return (
    <div className="res-card" /* style={styleCard}*/>
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/3/18875863/a7499d72024b4c6f7ef661ecf3cbc8c4_featured_v2.jpg?output-format=webp"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{ratings}</h4>
      <h4>{timing}</h4>
    </div>
  );
};
const Body=()=>{
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          // these are props(property) to a component
          resName="Brijwasi foods"
          cuisine="Sweets , North Indian"
          ratings="4.5"
          timing="30 min"
          />
        <RestaurantCard 
          resName="Sankar foods"
          cuisine="Sweets , North Indian"
          ratings="4.4"
          timing="35 min"
        />
      </div>
    </div>
  );
};

const AppLayout=() =>
{
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
