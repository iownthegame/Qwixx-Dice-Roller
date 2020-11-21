import React, { useState, useRef } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import './App.css';

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

const Dice = ({ id, color, disable, diceRef, toggleDiceDisable }) => {
  return !disable && (
    <div className='my-dice' onClick={()=>toggleDiceDisable(id)}>
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
          id={dice.id}
          color={dice.color}
          disable={dice.disable}
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

  return <button onClick={rollAll}>Gooi</button>
}

function App() {
  const [dices, setDices] = useState(initialDices);
  const diceRef = useRef([]);

  const toggleDiceDisable = (id) => {
    setDices(dices.map(dice => dice.id === id ? {...dice, disable: !dice.disable} : dice))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Qwixx Dice Roller</p>
        <Dices dices={dices} diceRef={diceRef} toggleDiceDisable={toggleDiceDisable} />
        <RollButton diceRef={diceRef} dices={dices} />
      </header>
    </div>
  );
}

export default App;
