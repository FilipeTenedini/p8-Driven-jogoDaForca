import * as C from './style';
import { hangmanImages } from '../../items/hangmanImages';
import { useState } from 'react';

export const Jogo = () => {
    const [deadLine, setDeadLine] = useState(0);

    return (
        <C.Container>
            <C.HangmanImage>
                <C.Image src={hangmanImages[deadLine]} alt={'hangman game image'} />
            </C.HangmanImage>
            <C.GameSpace>
                <C.ChoiceBtn>
                    Escolher Palavra
                </C.ChoiceBtn>
                <C.WordSpace>
                </C.WordSpace>
            </C.GameSpace>
        </C.Container>
    );
}