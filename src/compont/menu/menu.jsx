import React, { useState } from 'react';
import './menu.css';
import { PlayIcon } from '../play/playIcon';
export const Menu = ({closeMenu}) => {
    return(
        <div className='conteiner-menu'>
            
            <div>
                <img src='../../assets/images/logo.svg' alt=""  className='logo'/>
            </div>
            <PlayIcon closeMenu={closeMenu}/>

            <button onClick={closeMenu}>HOW TO PLAY</button>
            <div className='p'></div>
        </div>

    )
}