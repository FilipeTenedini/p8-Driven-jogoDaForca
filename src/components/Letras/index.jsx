import * as C from './style';
import { listaLetras } from '../../items/listaLetras';
import { Letra } from '../Letra';

export const Letras = ({isDisabled}) => {
    return (
        <C.Container>
            {listaLetras.map(letra => <Letra key={letra} char={letra} isDisabled={isDisabled}/>)}
        </C.Container>
    );
}