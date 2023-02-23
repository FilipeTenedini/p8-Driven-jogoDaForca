import { useState } from 'react';
import * as C from './App.styles';
import { Jogo } from './components/Jogo';
import { Letras } from './components/Letras';

function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [attempts, setAttempts] = useState(['e']);
  const [deadLvl, setDeadLvl] = useState(0);
  const word = 'filipx'.split('')

  const startGame = () => {
    setIsDisabled(false);
  }

  return (
    <>
    <C.GlobalStyle />
    <C.Container>
      <Jogo 
        word={word}
        clickFn={startGame}
        attempts={attempts}
        deadLvl={deadLvl}
      />
      <Letras 
        word={word}
        isDisabled={isDisabled}
        attempts={attempts}
        setAttempts={setAttempts}
        deadLvl={deadLvl}
        setDeadLvl={setDeadLvl}
      />
    </C.Container>
    </>
  );
}

export default App;
