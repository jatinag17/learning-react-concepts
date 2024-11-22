import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); // This will provide you to fetch resId from API link, Here "params" is a object containing resId
  const resInfo = useRestaurantMenu(resId);
  //in this useRestaurantMenu will be treated as custom hook made by us

  // console.log(resId); // display resId in console

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} - ₹{item.card.info.price / 100}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
