import React from 'react';
import './teclado.css'

const letras = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
    ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
];

export const Teclado = () => {
  return (
    <div className='conteiner-teclado'>
      {letras.map((linha, indexLinha) => (
        <div className='teclado-linha' key={indexLinha}>
            {linha.map((letra, indexLetra) => {
                return letra=='J' ? (
                    <div className='box-letra box-letra-desable' key={indexLetra}>{letra}</div>
                ) : (
                    <div className='box-letra box-letra-enable' key={indexLetra}>{letra}</div>
                );
            })}
        </div>
      ))}
    </div>
  );
}
