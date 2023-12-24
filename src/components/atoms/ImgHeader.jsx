import React from 'react';
import image from '../../images/logoHeader.png'

const ImgHeader = () => {
    return (
        <div>
            <img className='imgHeader' src={image} alt='logo'></img>
        </div>
    );
}

export default ImgHeader;
