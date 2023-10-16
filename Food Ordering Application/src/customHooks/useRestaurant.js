import { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../utils/constrains";

const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [newRestauantList,setNewRestaurantList]=useState([]);

    const updateData=(filterRestaurants)=>{
        setRestaurantList(filterRestaurants);
    }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch(RESTAURANT_LIST);
        if(!response.ok){
            throw new Error('Network REsponse is not ok');
        }
    const data = await response.json();

    setRestaurantList(
      data?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNewRestaurantList(
      data?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    } catch (error) {
        console.error('fetch error',error);
    }
    

  };
  return {restaurantList,newRestauantList,updateData};
};

export default useRestaurant;
