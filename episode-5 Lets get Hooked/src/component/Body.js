import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

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
export default Body;
