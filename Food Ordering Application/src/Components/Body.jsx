import React, { useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [newRestaurants, setNewRestaurants] = useState([]);
  const onlineStatus=useOnlineStatus();
  // const RestaurantsCardPromoted=withPromotedLabel(RestaurentCard);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const Json = await data.json();
    // console.log(Json);
    // console.log(Json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(
      Json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNewRestaurants(
      Json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(onlineStatus===false){
    return (
      <div>
        <h1>Opps</h1>
        <h2>You are Offline</h2>
        <h3>Please connect to Internet for Online</h3>
      </div>
    )
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
            const filterRestaurants = newRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurants(filterRestaurants);
          }}
        >
          Search
        </button>
      </div>
      
      <div>
        <button
          className="px-4 py-2 ml-4 font-medium text-white bg-blue-500 rounded-lg"
          onClick={() => {
            const filterRes = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-12">
          {listOfRestaurants.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
              <RestaurentCard key={restaurant.info.id} resdata={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
