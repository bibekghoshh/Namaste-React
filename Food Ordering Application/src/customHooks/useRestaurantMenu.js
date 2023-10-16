import { useEffect, useState } from "react";
import { MENU_ITEM } from "../utils/constrains";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data= await fetch(MENU_ITEM+resId);
        const json= await data.json();

        setResInfo(json.data);
        // console.log(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;