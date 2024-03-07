import React, { useState } from 'react';
import './playIcon.css';

export const PlayIcon = ({closeMenu}) => {
    return(
        <div className='cont-icon' onClick={closeMenu}>
            <div className='playIcon-preto'></div>
            <div className='playIcon-rosa'></div>
            <div className='playIcon'></div>  
            <img src='../../assets/images/icon-play.svg' alt="" className='playIcon-img'/>
        </div>
    )
}