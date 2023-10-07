import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
    
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);
  // console.log(itemCards[2].card.info.name);

  return (
    <div>
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <h2>{cuisines.join(", ")}</h2>
      <div>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} -{" "}
            {item.card.info.price || item.card.info.defaultPrice}
          </li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
