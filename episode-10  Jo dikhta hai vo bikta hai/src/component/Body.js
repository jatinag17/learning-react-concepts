import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import "../../index.css";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state variable update, react triggers a reconcilation cycle(re-renders a component)
  console.log("body rendered");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4976751&lng=77.657273&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) return <h1>Looks Like you're offline!!!</h1>;
  //condition rendering -: render on the basis of condition
  //  if(listOfRestaurants.length===0)
  //  {
  //   return <Shimmer/>
  //  }

  // } catch (error) {
  //   setListOfRestaurant([]);
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-2 p-4">
          <input
            type="text"
            className="search-box border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-3 rounded-lg"
            onClick={() => {
              {
                /* filter the restaurant card and update the UI 
        Search text */
              }
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-2 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-stone-300 m-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRatingString >= 4
              );
              console.log(filteredList);
              // Updating State from Local State Variable
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Looping restList using map */}
        {filteredRestaurant.map((restaurant) => (
          //! You have to always mention unique key over here
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />

          //* not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<< unique id (best practice)
        ))}
      </div>
    </div>
  );
};
export default Body;
