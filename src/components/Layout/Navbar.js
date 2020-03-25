import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <nav className='navbar'>
            <h1>
                <i className={icon}></i> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
