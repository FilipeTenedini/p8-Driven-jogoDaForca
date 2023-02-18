import * as C from './App.styles';
import { Jogo } from './components/Jogo';
import { Letras } from './components/Letras';

function App() {
  return (
    <>
    <C.GlobalStyle />
    <C.Container>
      <Jogo />
      <Letras />
    </C.Container>
    </>
  );
}

export default App;
