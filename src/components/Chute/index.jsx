import * as C from './style';
import { useState } from 'react';

export const Chute = ({word, isDisabled, setIsDisabled, setAttempts, setDeadLvl, setMatchResult, setPlaying}) => {
    const [singleAttempt, setSingleAttempt] = useState('');

    const normalizeWord = (word) => {
        return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    const confirmWord = () => {
        if (normalizeWord(singleAttempt) === normalizeWord(word.join(''))){
            setMatchResult(true);
            setPlaying(false);
            setIsDisabled(true);
            setAttempts(word);
        } else {
            setDeadLvl(6)
            setMatchResult(false);
            setPlaying(false);
            setIsDisabled(true);
        }
    }

    return (
        <C.Container>
            <C.Text>Já sei a palavra!</C.Text>
            <C.InputArea 
                type="text"
                placeholder="Tente a sorte!"
                disabled={isDisabled}
                onChange ={(e) => setSingleAttempt(e.target.value)}/>
            <C.Btn disabled={isDisabled} onClick={() => confirmWord()}>Chutar</C.Btn>
        </C.Container>
    );
}