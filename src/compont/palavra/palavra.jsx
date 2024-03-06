import React, { useState } from 'react';
import './palavra.css';

export const Palavra = ({letras}) => {
    return(
        <div className='conteiner-box-letra-show'>
            {letras.map((letra, indexLetra) => (
                letra === 0 ? (
                    <div  className='box-letra-show' key={indexLetra}></div>
                ) : (
                    <div 
                        className={`box-letra-show ${letra === '' ? 'letra-not-vizible' : 'letra-vizible'}`} 
                        key={indexLetra} 
                    >
                        {letra}
                    </div>
                )
            ))}
        </div>

    )
}