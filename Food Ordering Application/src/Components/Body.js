import React, { useContext, useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import useRestaurant from "../customHooks/useRestaurant";

const Body = () => {
  const { restaurantList, newRestauantList, updateData } = useRestaurant();

  const onlineStatus = useOnlineStatus();
  // const RestaurantsCardPromoted=withPromotedLabel(RestaurentCard);
  const [searchText, setSearchText] = useState("");
  const { setUserName, logUser } = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Opps</h1>
        <h2>You are Offline</h2>
        <h3>Please connect to Internet for Online</h3>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center w-full my-12">
        <input
          type="text"
          name="text"
          id="search"
          className="px-6 py-2 text-lg rounded-full w-[400px] border-gray-400 border-2"
          placeholder="Enter Your Location"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 ml-4 text-white bg-blue-400 rounded-lg"
          onClick={() => {
            const filterRestaurants = newRestauantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            updateData(filterRestaurants);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex gap-10 mb-4">
        <button
          className="px-4 py-2 ml-4 font-medium text-white bg-blue-500 rounded-lg"
          onClick={() => {
            const filterRes = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            updateData(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          name="text"
          id="search"
          className="px-6 py-2 text-lg rounded-full w-[250px] border-gray-400 border-2"
          placeholder="change your name"
          value={logUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      {restaurantList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-12">
          {restaurantList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurentCard key={restaurant.info.id} resdata={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
