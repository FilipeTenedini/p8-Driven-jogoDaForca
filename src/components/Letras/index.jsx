import * as C from './style';   
import { listaLetras } from '../../items/listaLetras';
import { Letra } from '../Letra';

export const Letras = ({isDisabled, word, attempts, setAttempts, setDeadLvl, deadLvl}) => {

    return (
        <C.Container>
            {listaLetras.map(char => (
            <Letra 
                key={char}
                char={char}
                word={word}
                isDisabled={isDisabled}
                attempts={attempts}
                setAttempts={setAttempts}
                deadLvl={deadLvl}
                setDeadLvl={setDeadLvl}
            />
            ))}
        </C.Container>
    );
}