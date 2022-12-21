
import React from 'react'
import './App.css';
import Jokes from './Jokes'
import data from './data'

function App() {

const [joke, setJoke] = React.useState(data)

const allJokes = joke.map(singleJoke => <Jokes 
title={singleJoke.setup} 
punchline={singleJoke.punchline}
key={singleJoke.id}
/>)

  return (
    <div className="App">
      {allJokes}
    </div>
  );
}

export default App;
