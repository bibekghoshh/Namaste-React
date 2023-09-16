import React from 'react';
import { createRoot } from 'react-dom/client';

const heading=<h1>Hello Javascript Developer</h1>;

const root = createRoot(document.getElementById("root"));

root.render(heading);