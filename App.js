import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1",{id:"container"},"Heading");

const heading2 = <h1 id='title' key="h2" className="heading">Heading</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);

