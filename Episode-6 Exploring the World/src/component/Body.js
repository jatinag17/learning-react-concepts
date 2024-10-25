import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import "../../index.css";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4976751&lng=77.657273&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
       setListOfRestaurant(
         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
           ?.restaurants
       );
      };
       if(listOfRestaurants.length===0)
       {
        return <Shimmer/>
       }
      
      
    // } catch (error) {
    //   setListOfRestaurant([]);
    // }
  

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn "
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString >= 0
            );
            console.log(filteredList);
            // Updating State from Local State Variable
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div
        className="rest-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "75px" }}
      >
        {/* Looping restList using map */}
        {listOfRestaurants.map((restaurant) => (
          //! You have to always mention unique key over here
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />

          //* not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice)
        ))}
      </div>
    </div>
  );
};
export default Body;
