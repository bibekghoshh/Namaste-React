import React from "react";
import {createRoot}  from "react-dom/client";
import Header from "./src/Components/Header";
import "./index.css";
import Body from "./src/Components/Body";
import ContactUs from "./src/Components/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/Components/RestaurantMenu";



function AppLayout() {

    return (
        <div>
            <Header />
            <Outlet/>
        </div>
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
                element:<About/>
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