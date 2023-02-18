import * as C from './style';

export const Letra = ({char, isDisabled}) => {
    return (
        <C.Character disabled={isDisabled} notActive={isDisabled}>
            {char}           
        </C.Character>
    );
}