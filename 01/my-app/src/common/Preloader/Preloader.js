import React from 'react';
import fetchingGIF from '../../assets/gif/Dual Ring-1s-200px.gif'

let Preloader = (props) => {
    return <div>
        <img src={fetchingGIF} />
    </div>
}

export default Preloader;