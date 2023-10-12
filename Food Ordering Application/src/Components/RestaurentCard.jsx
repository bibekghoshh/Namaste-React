import React, { useContext } from "react";
import { CND_URL } from "../utils/constrains";
import UserContext from "../utils/UserContext";

const RestaurentCard = ({ resdata }) => {
  // console.log(resdata);
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resdata?.info;

    const {logUser}=useContext(UserContext);

  return (
    <div className="flex flex-col bg-slate-300 w-[250px] h-[340px] rounded-md">
      <div>
        <img
          className="w-full h-[200px] rounded-md"
          src={CND_URL + cloudinaryImageId}
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
      <h6>{logUser}</h6>
    </div>
  );
};

// export const withPromotedLabel=(RestaurentCard)=>{
//   return(props)=>{
//     return(
//       <div>
//         <label>Promoted</label>
//         <RestaurentCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurentCard;
