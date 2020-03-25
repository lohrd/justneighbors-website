import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Navbar from './components/Layout/Navbar'




const App = () => {
    return (
        <Router>
            <div>
            <Navbar></Navbar>
            <Switch>
                <Route>
                    <Home></Home>
                </Route>
                <Route>
                    <About></About>
                </Route>
                <Route>
                    <Contact></Contact>
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default App;