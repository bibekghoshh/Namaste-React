import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React my friend"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("H1", {}, "This is H2 tag"),
  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"Created a h1 tag using React createelement"),
    React.createElement("h2",{},"created this element using React")
  ])
);

const root = createRoot(document.getElementById("root"));

root.render(parent);
