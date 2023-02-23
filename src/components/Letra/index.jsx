import { useState } from 'react';
import * as C from './style';

export const Letra = ({char, word, isDisabled, attempts, setAttempts, deadLvl, setDeadLvl, hits, setHits}) => {

    const [disabled, setDisabled] = useState(false);

    const confirmScore = (lvl, hit = 0) => {
        console.log('confirmhit', hit)
        if (hit === Array.from(new Set(word)).length){
            console.log('VENCEMO')
        } else if (lvl === 6) {
            console.log('PERDEMO')
        }
    }

    const toNextMove = () => {
        setAttempts([...attempts, char]);
        
        let atualLvl = deadLvl
        let atualHit = hits

        if (!word.includes(char)){
            atualLvl += 1;
            setDeadLvl(atualLvl);
        } else {
            atualHit+=1;
            setHits(atualHit);
        }

        confirmScore(atualLvl, atualHit);
    }

    const disableChar = () => {
        setDisabled(true);
        toNextMove();
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