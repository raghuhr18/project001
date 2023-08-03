import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1",{id:"container"},"Heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

