import React from 'react'

const Jokes = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.punchline}</p>
    </div>
  )
}

export default Jokes