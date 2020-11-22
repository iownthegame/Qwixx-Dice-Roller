import React, { useState, useRef } from 'react';
import ReactDice from 'react-dice-complete';
import GithubCorner from 'react-github-corner';

import 'react-dice-complete/dist/react-dice-complete.css';
import './App.scss';

const initialDices = [
  {
    id: 1,
    color: '#d13545',
    disable: false,
  },
  {
    id: 2,
    color: '#f4c34f',
    disable: false,
  },
  {
    id: 3,
    color: '#5fa645',
    disable: false,
  },
  {
    id: 4,
    color: '#3263a7',
    disable: false,
  },
  {
    id: 5,
    color: '#f6f5f1',
    disable: false,
  },
  {
    id: 6,
    color: '#f6f5f1',
    disable: false,
  }
]

const Dice = ({ dice, diceRef, toggleDiceDisable }) => {
  const { id, color, disable } = dice
  return !disable && (
    <div className='my-dice' onClick={()=>toggleDiceDisable(dice)}>
      <ReactDice
        numDice={1}
        faceColor={color}
        dotColor={color === '#f6f5f1' ? 'black' : '#f6f5f1'}
        ref={dice => diceRef.current[id-1] = dice}
        disableIndividual={true}
      />
    </div>
  )
}

const Dices = ({ dices, diceRef, toggleDiceDisable }) => {
  return (
    <div>
      {dices.map(dice =>
        <Dice
          key={dice.id}
          dice={dice}
          diceRef={diceRef}
          toggleDiceDisable={toggleDiceDisable}
        />
      )}
    </div>
  )
}

const RollButton = ({ diceRef, dices }) => {
  const rollAll = () => {
    dices.forEach((dice, i) => {
      if (!dice.disable) {
        diceRef.current[i].rollAll()
      }
    })
  }

  return <button id="roll-button" onClick={rollAll}>Gooi</button>
}

const TrashCan = ({ dices, toggleDiceDisable }) => {
  const disableDices = dices.filter(dice => dice.disable)

  return disableDices.length > 0 && (
    <div id="trash-can">
      {disableDices.map(dice =>
        <div className='trash-dice' onClick={()=>toggleDiceDisable(dice)}>
          <ReactDice
            numDice={1}
            faceColor={dice.color}
            dotColor={dice.color === '#f6f5f1' ? 'black' : '#f6f5f1'}
            disableIndividual={true}
            rollTime={0}
            dieSize={30}
          />
        </div>
      )}
    </div>
  )
}

function App() {
  const [dices, setDices] = useState(initialDices);
  const diceRef = useRef([]);

  const toggleDiceDisable = (currentDice) => {
    setDices(dices.map(dice => dice.id === currentDice.id ? {...dice, disable: !dice.disable} : dice))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Qwixx Dice Roller</p>
        <Dices dices={dices} diceRef={diceRef} toggleDiceDisable={toggleDiceDisable} />
        <RollButton diceRef={diceRef} dices={dices} />
        <TrashCan dices={dices} toggleDiceDisable={toggleDiceDisable} />
      </header>
      <GithubCorner href="https://github.com/iownthegame/Qwixx-Dice-Roller" />
    </div>
  );
}

export default App;
