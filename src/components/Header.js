import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    return(
    <h1 id='title' key="h2" className="heading">
        <a href="/">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F91801773%2FFood-Delivery-Logo&psig=AOvVaw3F55kZPOUtgffMuEqk5wgW&ust=1691343458133000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCMDnlMOHxoADFQAAAAAdAAAAABAR" 
            alt='logo' className="h-28 p-2"/>
        </a>  
    </h1>
    )
}
const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(true);
    const isOnline = useOnline();

    return(
        <div className='flex justify-between bg-purple-100 shadow-md'>
            <Title />
            <div className='space-x-4'>
                <ul className="flex py-10">
                    <li className="px-2"><Link  to="/">Home</Link></li> 
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li>Cart</li>
                </ul>
            </div>

            <h2 className="py-10">{isOnline ? "🟢 Online":"🔴 Offline"}</h2>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ):(
                <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
            )}
        </div>

    )
}

export default Header;