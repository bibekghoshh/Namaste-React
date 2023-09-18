import React from 'react'
import RestaurentCard from '../Cards/RestaurentCard';

import {restaurants} from '../data/restaurants.js';

// console.log(restaurants);

const Body = () => {
  return (
    <div>
        <div className='search-container'>
            <input type="text" name="text" id="search" placeholder='Enter Your Location' />
            <button className='search-btn'>Search</button>
        </div>
        <div className='Res-Container'>
            {/* <RestaurentCard resdata={restaurants[0]}/> */}
            {restaurants.map((restaurant)=>(<RestaurentCard key={restaurant.info.id} resdata={restaurant}/>))}
        </div>
    </div>
  )
}

export default Body;