import * as C from './style';   
import { listaLetras } from '../../items/listaLetras';
import { Letra } from '../Letra';

export const Letras = ({isDisabled, attempts, setAttempts, deadLvl, setDeadLvl, hits, setHits, word, setMatchResult, setPlaying}) => {
    
    const confirmScore = (hit, lvl) => {
        if (hit === Array.from(new Set(word)).length){
            setMatchResult(true);
            setPlaying(false);
        } else if (lvl === 6) {
            setMatchResult(false);
            setPlaying(false);
        }
    }

    const updateScore = (character) => {
        let newHit = hits;
        let newLvl = deadLvl;

        if (word.includes(character)){
            newHit += 1;
            setHits(newHit);
        } else {
            newLvl += 1;
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