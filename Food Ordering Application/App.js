import React, { lazy, Suspense, useEffect, useState } from "react";
import {createRoot}  from "react-dom/client";
import Header from "./src/Components/Header";
import "./index.css";
import Body from "./src/Components/Body";
import ContactUs from "./src/Components/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./src/Components/About";
import Error from "./src/Components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/Components/Grocery";

const About = lazy(()=>import("./src/Components/About"));
const Grocery= lazy(()=>import("./src/Components/Grocery"));

function AppLayout() {
    const [userName,setUserName]=useState("");
    useEffect(()=>{
        const data={name:"Uttam Ghosh"};
        setUserName(data.name);
    },[]);

    return (
        <UserContext.Provider value={{logUser:userName,setUserName}}>
        <div>
            <Header />
            <Outlet/>
        </div>
        </UserContext.Provider>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/about",
                element:(<Suspense fallback={<h1>About us is LOADING.......</h1>}><About/></Suspense>)
                // element:<About/>
            },{
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading.............</h1>}><Grocery/></Suspense>
            },
            {
                path:"restaurants/:resId",
                element:<RestaurantMenu/>,
            }
        ],
        errorElement:<Error/>,
    },  
]);

const root=createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);