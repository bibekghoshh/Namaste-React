import React, { useEffect, useState } from 'react'
import RestaurentCard from '../Cards/RestaurentCard';


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants]=  useState([]);

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const Json=await data.json();
      // console.log(Json);
      // console.log(Json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurants(Json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  return (
    <div>
        <div className='search-container'>
            <input type="text" name="text" id="search" placeholder='Enter Your Location' />
            <button className='search-btn'>Search</button>
        </div>
        <div>
          <button className='top-restaurant-btn' onClick={()=>{
            const filterRes=listOfRestaurants.filter((res)=>(res.info.avgRating>4.2));
            setListOfRestaurants(filterRes);
          }}>Top Rated Restaurants</button>
        </div>
        <div className='Res-Container'>
            {/* <RestaurentCard resdata={restaurants[0]}/> */}
            {listOfRestaurants.map((restaurant)=>(<RestaurentCard key={restaurant.info.id} resdata={restaurant}/>))}
        </div>
    </div>
  )
}

export default Body;