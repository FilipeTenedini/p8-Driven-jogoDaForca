import * as C from './style';
import { listaLetras } from '../../items/listaLetras';
import { Letra } from '../Letra';

export const Letras = () => {
    return (
        <C.Container>
            {listaLetras.map(letra => <Letra key={letra} char={letra} isDisabled={true}/>)}
        </C.Container>
    );
}