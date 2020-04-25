import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from './components/button/button.js'
import Character from './components/character/character.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState();  
  const [charNum, setCharNum] = useState(1);

  useEffect( () => {
      axios
        .get('https://swapi.py4e.com/api/people/' + charNum + '/')
        .then(response => {
          setCharacter(response.data)
          })
        .catch(err => console.log("Error", err))
  }, [charNum]);

  console.log(character);

  return (
    <div className="wrapper">
     <Character character={character} />
      <Button charNum={charNum} changeChar={setCharNum} />
    </div>
  );
}

export default App;
