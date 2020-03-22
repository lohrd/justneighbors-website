import * as React from 'react';
import '../styles.css';
import Image from '../images/monterrey.jpeg'

const backgroundImage = require('../images/monterrey.jpeg');
const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#040405'
}

const Home = () => {
    return (
        <div style={backgroundStyle}></div>
    )
}

export default Home;