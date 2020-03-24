import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'



const App = () => {
    return (
        <Router>
            <Switch>
                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Switch>

        </Router>
        <Home></Home>
    )
}

export default App;