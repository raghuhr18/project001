import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = (
    <h1 id='title' key="h2" className="heading">
        Heading
    </h1>
    )

const HeaderComponent = () => {
   return(
    <div>
        {Title}
        <h1>Test</h1>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

