import React from 'react';
import image from '../../src/images/bg.webp';

function Picture() {
    return (
        <div className="picture">
            <picture className="picture__wrapper">
                <img className="picture__img" src={image} alt="" />
            </picture>
        </div>
    ) 
}

export default Picture;