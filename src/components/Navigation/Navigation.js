import React from 'react';

const Navigation = ({onroutechange , issignin}) => {

    if(issignin){
        return(
            <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
                <button style={{backgroundColor:'#2b101b' , color: 'white' , margin:'10px'}} className='f3 link dim black pa3 pointer' onClick={() => onroutechange('signout')}>Sign out</button>
            </nav>
        );
    }else{
        return(
            <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
                <button style={{backgroundColor:'#2b101b' , color: 'white' , margin:'10px'}} className='f3 link dim black pa3 pointer' onClick={() => onroutechange('signin')}>Sign in</button>
                <button style={{backgroundColor:'#2b101b' , color: 'white' , margin:'10px'}} className='f3 link dim black pa3 pointer' onClick={() => onroutechange('register')}>Register</button>
            </nav>
        );
    }    
}

export default Navigation;