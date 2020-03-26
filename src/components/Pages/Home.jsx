import * as React from 'react';
import '../../styles.css';



const Home = (props) => {
    return (
        <div className="background" style={{backgroundImage: `url(${props.homeImage})`}} >

        </div>
    )
}

export default Home;