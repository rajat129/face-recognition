import React from 'react';
import './Facerecognition.css';

const Facerecognition = ({imgurl , box}) => {
    return(
        <div className='center ma'>
            <div style={{ marginLeft:'720px'}} className=' absolute mt2'>
                <img id='inputimage' alt=''  src={imgurl} width='500px' height='auto' />
                <div className='bounding-box' style={{top: box.toprow , left: box.leftcol , right: box.rightcol , bottom: box.bottomrow }}></div>
            </div>    
        </div>
    );
}

export default Facerecognition;