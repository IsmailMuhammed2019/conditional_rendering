import React from 'react'

const Jokes = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.punchline}</p>
      <button>View Punchline</button>
    </div>
  )
}

export default Jokes