
import React from 'react'
import './App.css';
import Jokes from './Jokes'
import data from './data'

function App() {
  
  const [messages, setMessages] = React.useState(["a", "b", "c"])

const [joke, setJoke] = React.useState(data)

const allJokes = joke.map(singleJoke => <Jokes 
title={singleJoke.setup} 
punchline={singleJoke.punchline}
key={singleJoke.id}
/>)

  return (
    <div className="App">
      {allJokes}
      {/* {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>} */}
    </div>
  );
}

export default App;
