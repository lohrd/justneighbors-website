import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Layout from './components/Layout/Layout'
import NavigationBar from './components/Layout/NavBarStyle'
import Navbar from './components/Layout/Navbar'
import HomeImage from './images/monterrey.jpeg'
import AboutImage from './images/band_wall.jpeg'
import ContactImage from './images/JapanContact.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
    return (
        <div>
            <Navbar></Navbar>
        </div>

    )
}

export default App;


{/* <React.Fragment>
<NavigationBar>
    <Layout>
        <Router>
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
    </Layout>
</NavigationBar>
</React.Fragment> */}