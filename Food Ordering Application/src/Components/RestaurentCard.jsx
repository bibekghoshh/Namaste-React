import React from "react";

const RestaurentCard = ({ resdata }) => {
  // console.log(resdata);
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resdata?.info;
  return (
    <div className="flex flex-col bg-slate-300 w-[250px] h-[340px] rounded-md">
      <div>
        <img
          className="w-full h-[200px] rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="res-img"
        />
      </div>
      <div>
        <h2 className="ml-2 text-lg font-medium">{name}</h2>
        <p>⭐{avgRating}</p>
        <div className="w-[250px] h-7 overflow-hidden">
          <p>{cuisines.join(", ")}</p>
        </div>
        <h3>{costForTwo}</h3>
      </div>
    </div>
  );
};

export default RestaurentCard;
