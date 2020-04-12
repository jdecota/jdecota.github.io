import React from 'react';
import img from '../assets/images/coming-soon.png';


const ComingSoon = () => {
    return(
        <div>
            <img src={img} alt="Coming Soon" width="100%" style={{ maxWidth: 200 }}/>
        </div>
    )
}

export default ComingSoon;
