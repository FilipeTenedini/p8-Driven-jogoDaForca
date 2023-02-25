import { useState } from 'react';
import * as C from './App.styles';
import { Jogo } from './components/Jogo';
import { Letras } from './components/Letras';
import { Chute } from './components/Chute';
import palavras from './items/palavras';

function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [attempts, setAttempts] = useState([]);
  const [deadLvl, setDeadLvl] = useState(0);
  const [hits, setHits] = useState(0);
  const [word, setWord] = useState(palavras[Math.ceil((Math.random() * palavras.length))].split(''));
  const [playing, setPlaying] = useState(false);
  const [matchResult, setMatchResult] = useState(false);

  const startGame = () => {
    setIsDisabled(false);
    setAttempts([]);
    setDeadLvl(0);
    setHits(0);
    setWord(palavras[Math.ceil((Math.random() * palavras.length))].split(''));
    setMatchResult(false);
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
        word={word}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        attempts={attempts}
        setAttempts={setAttempts}
        deadLvl={deadLvl}
        setDeadLvl={setDeadLvl}
        hits={hits}
        setHits={setHits}
        setMatchResult={setMatchResult}
        setPlaying={setPlaying}
      />

      <Chute
        word={word}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        setAttempts={setAttempts}
        setDeadLvl={setDeadLvl}
        setPlaying={setPlaying}
        setMatchResult={setMatchResult}
      />
    </C.Container>
    </>
  );
}

export default App;
