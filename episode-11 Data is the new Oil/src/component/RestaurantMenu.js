import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useParams } from "react-router-dom";
import { useState} from "react";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); // This will provide you to fetch resId from API link, Here "params" is a object containing resId
  const resInfo = useRestaurantMenu(resId);
  //in this useRestaurantMenu will be treated as custom hook made by us
const [showIndex,setShowIndex] = useState(null);
  // console.log(resId); // display resId in console

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
   const categories =
     resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
       (c) =>
         c.card?.card?.["@type"] ===
         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );

  return (
    <div className="text-center select-none">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories Accordions */}
      {categories.map((category, index) => (
        //* Controlled Component Now
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
