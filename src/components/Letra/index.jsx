import { useState } from 'react';
import * as C from './style';

export const Letra = ({char, word, isDisabled, attempts, setAttempts, deadLvl, setDeadLvl}) => {

    const [disabled, setDisabled] = useState(false);

    const disableChar = () => {
        setDisabled(true);
        setAttempts([...attempts, char]);

        if (!word.includes(char)){
            setDeadLvl(deadLvl+1)
        }
    }


    return (
        <C.Character 
            disabled={disabled || isDisabled} 
            onClick={disableChar}
        >
            {char}           
        </C.Character>
    );
}