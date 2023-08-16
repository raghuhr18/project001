import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import About from './src/components/About';
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';



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
        <Outlet />
        <Footer />
    </>
   )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About /> 
            },
            {
                path: "/contact",
                element: <Contact /> 
            },
            {
                path: "/",
                element: <Body /> 
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu /> 
            }
        ],
    },
],
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

