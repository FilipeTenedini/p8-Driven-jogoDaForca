import { useState } from 'react';
import * as C from './style';

export const Letra = ({char, isDisabled, clickFn, actuallyDisabled}) => {

    return (
        <C.Character 
            disabled={isDisabled || actuallyDisabled(char)} 
            onClick={() => clickFn(char)}
        >
            {char}           
        </C.Character>
    );
}