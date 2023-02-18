import { useState } from 'react';
import * as C from './App.styles';
import { Jogo } from './components/Jogo';
import { Letras } from './components/Letras';

function App() {

  const [isDisabled, setIsDisabled] = useState(true);

  const startGame = () => {
    setIsDisabled(false);
  }

  return (
    <>
    <C.GlobalStyle />
    <C.Container>
      <Jogo 
        clickFn={startGame}
      />
      <Letras 
        isDisabled={isDisabled}
      />
    </C.Container>
    </>
  );
}

export default App;
