import * as C from './style';
import { hangmanImages } from '../../items/hangmanImages';


export const Jogo = ({word, clickFn, attempts, deadLvl, matchResult, playing}) => {

    return (
        <C.Container>
            <C.HangmanImage>
                <C.Image src={hangmanImages[deadLvl]} alt={'hangman game image'}  data-test="game-image"/>
            </C.HangmanImage>
            <C.GameSpace>
                <C.ChoiceBtn onClick={clickFn} data-test="choose-word">
                    Escolher Palavra
                </C.ChoiceBtn>
                {(playing || (!playing && matchResult)) &&
                    <C.WordSpace color={playing ? "#000000" : "#27AE60"} data-test="word">
                        {word.map(c => attempts.includes(c) ? c : '_')} 
                    </C.WordSpace>
                }
                {!playing && !matchResult && deadLvl > 0 &&
                    <C.WordSpace color={"#FF0000"} data-test="word">
                        {word.map(c => c)} 
                    </C.WordSpace>
                }
            </C.GameSpace>
        </C.Container>
    );
                        
}