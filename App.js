import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';


        /* <Head />
            - Logo
            - nav Items
        <Body />
            - Search bar
            - Restaurant card
        <Footer /> 
            - links*/
            
const AppLayout = () => {
   return(
    <>
        <Header />
        <Body />
        <Footer />
    </>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

