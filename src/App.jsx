import { useState } from 'react';
import * as C from './App.styles';
import { Jogo } from './components/Jogo';
import { Letras } from './components/Letras';
import { palavras } from './items/palavras';

function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [attempts, setAttempts] = useState(['e', 'l', 'f']);
  const [deadLvl, setDeadLvl] = useState(0);
  const [hits, setHits] = useState(0);
  const [word, setWord] = useState('filipe'.split(''));

  const startGame = () => {
    setIsDisabled(false);
    setAttempts([]);
    // setDeadLvl(0);
    // setHits(0);
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
        isDisabled={isDisabled}
        attempts={attempts}
        setAttempts={setAttempts}
        deadLvl={deadLvl}
        setDeadLvl={setDeadLvl}
        hits={hits}
        setHits={setHits}
        word={word}
      />
    </C.Container>
    </>
  );
}

export default App;
