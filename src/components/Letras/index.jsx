import * as C from './style';   
import { listaLetras } from '../../listaLetras';
import { Letra } from '../Letra';

export const Letras = ({isDisabled, setIsDisabled, attempts, setAttempts, deadLvl, setDeadLvl, hits, setHits, word, setMatchResult, setPlaying}) => {

    const confirmScore = (hit, lvl) => {
        const maxErrors = 6;

        if (hit === Array.from(new Set(word)).length){
            setMatchResult(true);
            setPlaying(false);
            setIsDisabled(true);
        } else if (lvl === maxErrors) {
            setMatchResult(false);
            setPlaying(false);
            setIsDisabled(true);
        }
    }

    const updateScore = (character) => {
        let newHit = hits;
        let newLvl = deadLvl;

        if (word.includes(character)){
            newHit++;
            setHits(newHit);
        } else {
            newLvl++;
            setDeadLvl(newLvl);
        }
        confirmScore(newHit, newLvl);
    }

    const updateAttempts = (character) => {
        setAttempts([...attempts, character]);
        updateScore(character);
    }



    return (
        <C.Container>
            {listaLetras.map(char => (
            <Letra 
                key={char}
                char={char}
                isDisabled={isDisabled}
                actuallyDisabled={(letter) => attempts.includes(letter)}
                clickFn={(letter) => updateAttempts(letter)}
            />
            ))}
        </C.Container>
    );
}