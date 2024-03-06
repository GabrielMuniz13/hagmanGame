import React, { useState } from 'react';
import './teclado.css';


export const Teclado = ({handleClick, alfabeto}) => {

    console.log(alfabeto)
    return (
        <div className='conteiner-teclado'>
            {alfabeto.map((linha, indexLinha) => (
                <div className='teclado-linha' key={indexLinha}>
                    {linha.map((letra, indexLetra) => (
                        <div
                            key={indexLetra}
                            className={`box-letra ${letra.selected ? 'box-letra-desable' : 'box-letra-enable'}`}
                            onClick={ !letra.selected ? () => handleClick(indexLinha, indexLetra, letra.value) : undefined }
                        >
                            {letra.value}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
