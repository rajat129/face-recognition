import React from 'react';
import './imagelinkform.css';

const Imagelinkform = ({onInputChange , onSubmit}) => {
    return(
        <div>
            <p className='f3'> 
                {'This Magic brain will detect faces in your picture , give it a try !!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default Imagelinkform;