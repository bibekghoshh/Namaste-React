import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [newRestaurants, setNewRestaurants] = useState([]);

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
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          name="text"
          id="search"
          placeholder="Enter Your Location"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
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
          className="top-restaurant-btn"
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
        <div className="Res-Container">
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
