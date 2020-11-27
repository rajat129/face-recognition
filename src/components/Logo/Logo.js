import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 180, width: 180 }} >
            <div className="Tilt-inner pa3"> <img style={{paddingTop: '12px'}} alt={brain} src={brain}></img> </div>
            </Tilt>     
        </div>
    );
}

export default Logo;