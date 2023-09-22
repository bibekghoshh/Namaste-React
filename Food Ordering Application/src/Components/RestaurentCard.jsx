import React from "react";

const RestaurentCard = ({ resdata }) => {
  // console.log(resdata);
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resdata?.info;
  return (
    <div className="res-card">
      <div>
        <img
          className="res-img"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
          alt="res-img"
        />
      </div>
      <div>
        <h2>{name}</h2>
        <p>⭐{avgRating}</p>
        <p>{cuisines.join(", ")}</p>
        <h3>{costForTwo}</h3>
      </div>
    </div>
  );
};

export default RestaurentCard;
