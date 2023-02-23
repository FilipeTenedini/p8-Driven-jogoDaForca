import * as C from './style';
import { hangmanImages } from '../../items/hangmanImages';


export const Jogo = ({word, clickFn, attempts, deadLvl}) => {

    return (
        <C.Container>
            <C.HangmanImage>
                <C.Image src={hangmanImages[deadLvl]} alt={'hangman game image'} />
            </C.HangmanImage>
            <C.GameSpace>
                <C.ChoiceBtn onClick={clickFn}>
                    Escolher Palavra
                </C.ChoiceBtn>
                <C.WordSpace>
                    {word.map(c => attempts.includes(c) ? c : ' _')} 
                </C.WordSpace>
            </C.GameSpace>
        </C.Container>
    );
}