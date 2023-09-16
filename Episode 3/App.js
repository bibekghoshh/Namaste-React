import React from 'react';
import { createRoot } from 'react-dom/client';

const heading=<h1>Hello Javascript Developer</h1>;

const Title = ()=>{
    return(
        <>  
        <h1 className="title" tabIndex="5">This is a component composition😎</h1>
        </>
    )
}

const JSXcomponent=()=>{
    const name="Bibek Ghosh"
    return(
        <div className="container">
            <h1 className="heading">This is a Funtional Component 👍</h1>
            <h2>{name}</h2>
            <Title/>
            <Title></Title>
            {Title()}
            {heading}
        </div>
    )
}

const root = createRoot(document.getElementById("root"));

root.render(<JSXcomponent/>);