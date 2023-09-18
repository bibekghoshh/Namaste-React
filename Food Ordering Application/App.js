import React from "react";
import {createRoot}  from "react-dom/client";
import Header from "./src/Components/Header";
import "./index.css";
import Body from "./src/Components/Body";

function AppLayout() {

    return (
        <div>
            <Header />
            <Body/>
        </div>
    );
}

const root=createRoot(document.getElementById("root"));

root.render(<AppLayout/>);