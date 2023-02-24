import { useState } from 'react';
import * as C from './App.styles';
import { Jogo } from './components/Jogo';
import { Letras } from './components/Letras';
import { palavras } from './items/palavras';

function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [attempts, setAttempts] = useState([]);
  const [deadLvl, setDeadLvl] = useState(0);
  const [hits, setHits] = useState(0);
  const [word, setWord] = useState('filipe'.split(''));
  const [playing, setPlaying] = useState(true);
  const [matchResult, setMatchResult] = useState('');

  const startGame = () => {
    setIsDisabled(false);
    setAttempts([]);
    setDeadLvl(0);
    setHits(0);
    setMatchResult('');
    setPlaying(true);
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
        matchResult={matchResult}
        playing={playing}
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
        setMatchResult={setMatchResult}
        setPlaying={setPlaying}
      />
    </C.Container>
    </>
  );
}

export default App;
