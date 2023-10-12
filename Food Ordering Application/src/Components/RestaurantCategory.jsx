import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category,showItem ,setShowIndex}) => {
//   const [showItem, setShowItem] = useState(false);

  const data = category.card.card;
  console.log(category);
  // console.log(data);

const handleClick=()=>{
    // setShowItem(!showItem);
    setShowIndex();
}

  return (
    <div className="flex">
      <div onClick={handleClick} className="mb-4 rounded-md bg-neutral-200 w-[680px]">
        <div className="flex justify-between w-[650px] py-3 mx-4">
          <span className="text-lg font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
