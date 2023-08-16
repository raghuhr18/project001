import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
    return(
    <h1 id='title' key="h2" className="heading">
        <a href="/">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F91801773%2FFood-Delivery-Logo&psig=AOvVaw3F55kZPOUtgffMuEqk5wgW&ust=1691343458133000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCMDnlMOHxoADFQAAAAAdAAAAABAR" 
            alt='logo'/>
        </a>  
    </h1>
    )
}
const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(true);

    return(
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ):(
                <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
            )}
        </div>

    )
}

export default Header;