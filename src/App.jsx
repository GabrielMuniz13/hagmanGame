import React, { useState } from 'react';
import { Teclado } from './compont/teclado/teclado';
import { Palavra } from './compont/palavra/palavra';
import { Menu } from './compont/menu/menu';


export const App = () => {
    const palavra = 'CACHORRO'
    const [menu, setMenu] = useState(true)
    const [letras, setLetras] = useState (['', '', '', '', '', '', '', '']);
    
    const [alfabeto, setAlfabeto] = useState(
        [
            [
            { value: 'A', selected: false },
            { value: 'B', selected: false },
            { value: 'C', selected: false },
            { value: 'D', selected: false },
            { value: 'E', selected: false },
            { value: 'F', selected: false },
            { value: 'G', selected: false },
            { value: 'H', selected: false },
            { value: 'I', selected: false },
            ],
            [
            { value: 'J', selected: false },
            { value: 'K', selected: false },
            { value: 'L', selected: false },
            { value: 'M', selected: false },
            { value: 'N', selected: false },
            { value: 'O', selected: false },
            { value: 'P', selected: false },
            { value: 'Q', selected: false },
            { value: 'R', selected: false },
            ],
            [
            { value: 'S', selected: false },
            { value: 'T', selected: false },
            { value: 'U', selected: false },
            { value: 'V', selected: false },
            { value: 'W', selected: false },
            { value: 'X', selected: false },
            { value: 'Y', selected: false },
            { value: 'Z', selected: false },
            ],
        ]
    );

    const handleClick = (indexLinha, indexLetra, letra) => {
        setAlfabeto((prevAlfabeto) => {
            const updatedAlfabeto = [...prevAlfabeto];
            updatedAlfabeto[indexLinha] = [...prevAlfabeto[indexLinha]];
            updatedAlfabeto[indexLinha][indexLetra] = {
                ...prevAlfabeto[indexLinha][indexLetra],
                selected: true
            };
            return updatedAlfabeto;
        });

        verifyLetra(letra)


    };
    const verifyLetra = (letra) => {
        console.log(letra)
        const novasLetras = [...letras];  // Cria uma cópia do array de letras
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === letra) {
                novasLetras[i] = letra;  // Atualiza a letra na posição correta
            }
        }
        setLetras(novasLetras);
    }
    return (
        <div>
            { menu ? (
                <div>
                    <Menu/>
                </div>
                
            ) : (
                <div>
                    <Palavra letras={letras}/>
                    <Teclado handleClick={handleClick} alfabeto={alfabeto}/>
                </div>
            )}
        </div>
    )
}