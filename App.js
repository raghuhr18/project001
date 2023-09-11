import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import About from './src/components/About';
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import Profile from './src/components/Profile';
import Shimmer from './src/components/Shimmer';




        /* <Head />
            - Logo
            - nav Items
        <Body />
            - Search bar
            - Restaurant card
        <Footer /> 
            - links*/
const Instamart = lazy(() => import("./src/components/Instamart"));

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
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact /> 
            },
            {
                path: "/",
                element: <Body user={{name:"namaste"}}/> 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu /> 
            },
            {
                path: "/instamart",
                element: (
                <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense> 
                )
            }
        ],
    },
],
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

