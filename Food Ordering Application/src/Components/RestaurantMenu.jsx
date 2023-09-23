import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEM } from "../utils/constrains";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_ITEM + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
    console.log(jsonData.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
    
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
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
