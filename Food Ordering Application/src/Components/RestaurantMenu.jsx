import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItem,setShowItem]=useState(0);

  // console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => {
      return (
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // console.log(categories);

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card ||
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);
  // console.log(itemCards[2].card.info.name);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p>{costForTwoMessage}</p>
      <h2>{cuisines.join(", ")}</h2>
      <div>
        {categories.map((category,index) => (
          <RestaurantCategory
            key={category.card.card.title}
            category={category}
            showItem={index===showItem ?true:false}
            setShowIndex={()=> setShowItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
