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
const Header = () => {
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

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props)
  return (
    <div className="res-card" /* style={styleCard}*/>
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/3/18875863/a7499d72024b4c6f7ef661ecf3cbc8c4_featured_v2.jpg?output-format=webp"
        alt="res-logo"
      />
      <h4>{resData.info.name}</h4>
      <h3>{resData.info.costForTwo}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
const resObj = {
  info: {
    id: "513703",
    name: "Yogiraj Restaurant",
    cloudinaryImageId: "rgvyn4llxxvfdmazdgp4",
    locality: "Brij Nagar Colony",
    areaName: "Dampier_Nagar",
    costForTwo: "₹300 for two",
    cuisines: ["North Indian", "Chinese", "Fast Food"],
    avgRating: 4.2,
    veg: true,
    parentId: "228119",
    avgRatingString: "4.2",
    totalRatingsString: "719",
    sla: {
      deliveryTime: 20,
      lastMileTravel: 0.2,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "0.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-10-09 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
          description: "Delivery!",
        },
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
              },
            },
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/city/mathura/yogiraj-restaurant-brij-nagar-colony-dampier-nagar-rest513703",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          // these are props(property) to a component
          // resName="Brijwasi foods"
          // cuisine="Sweets , North Indian"
          // ratings="4.5"
          // timing="30 min"
          resData={resObj}
        />
        <RestaurantCard resData={resObj} />
        <RestaurantCard resData={resObj} />
        <RestaurantCard resData={resObj} />
        <RestaurantCard resData={resObj} />
        {/* <RestaurantCard 
          resName="Sankar foods"
          cuisine="Sweets , North Indian"
          ratings="4.4"
          timing="35 min"
        /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
