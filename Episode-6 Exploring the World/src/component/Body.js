import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="Body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating < 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard
          // these are props(property) to a component
          // resName="Brijwasi foods"
          // cuisine="Sweets , North Indian"
          // ratings="4.5"
          // timing="30 min"
          resData={resObj}
        />
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
export default Body;
