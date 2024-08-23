import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { ShopContext } from '../Contexts/ShopContext';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className="navlogo">
                <img src={logo} alt="Shopify Logo" />
                <p>Shopify</p>
            </div>
            <ul className='navmenu'>
                {['Shop', 'Men', 'Women', 'Kids'].map((menuItem) => (
                    <li
                        key={menuItem}
                        onClick={() => setActiveMenu(menuItem)}
                    >
                        <Link
                            style={{ textDecoration: 'none' }}
                            to={`/${menuItem}`}
                        >
                            {menuItem}
                        </Link>
                        {activeMenu === menuItem && <hr />}
                    </li>
                ))}
            </ul>
            <div className="navlogin">
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={cart} alt="Shopping Cart" />
                </Link>
                <div className="navcartcount">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
