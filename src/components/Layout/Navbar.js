import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import HomeImage from '../../images/monterrey.jpeg'
import AboutImage from '../../images/band_wall.jpeg'
import ContactImage from '../../images/JapanContact.jpg'

const Navbar = ({icon, title}) => {
    return (
        <Router>
            <div>
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
            </div>
            <Switch>
                <Route exact path="/">
                    <Home homeImage={HomeImage}></Home>
                </Route>
                <Route path="/about">
                    <About aboutImage={AboutImage}></About>
                </Route>
                <Route path="/contact">
                    <Contact contactImage={ContactImage}></Contact>
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar
