import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Image from './images/monterrey.jpeg'

// const backgroundImage = require('./images/monterrey.jpeg');
// const backgroundStyle = {
//     backgroundImage: `url(${Image})`,
//     backgroundPosition: 'center center',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     backgroundSize: 'cover',
//     backgroundColor: '#040405'
// }


const test = "hello world!"

const App = () => {
    return (
        <div className="background" style={{backgroundImage: `url(${Image})`}} >

            <Home></Home>
        </div>
    )
}

export default App;