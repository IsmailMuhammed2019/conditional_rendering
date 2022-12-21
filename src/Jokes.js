import React from 'react'

const Jokes = (props) => {
const styles = {
  display: "none",
}

  return (
    <div>
      <h2>{props.title}</h2>
      <p style={styles}>{props.punchline}</p>
      <button onClick={props.toggle}>View Punchline</button>
    </div>
  )
}

export default Jokes