import React from 'react'

const Jokes = (props) => {

const [isShown, setIsShown] = React.useState(false)


function toggle() {
  setIsShown(preState =>!preState )
}

  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggle}>{!isShown ? "View" : "Hide"} Punchline</button>
    </div>
  )
}

export default Jokes