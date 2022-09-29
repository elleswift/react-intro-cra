import { useState } from 'react'

const ColorComp = () => {
  const [textColor, setTextColor] = useState('Teal') // destructuring array

// textColor is our Getter (variable)
// setTextColor is our Setter (function) The Setter updates the variable.

console.log('textcolor ->', textColor)
return (
  <div className='App'>
      <header className='App-header'>
        <h1 style={{ color: textColor }}>My favorite color is {textColor}</h1>
        <button onClick={() => setTextColor('blue')}>Blue</button>
        <br />
        <button onClick={() => setTextColor('pink')}>Pink</button>
        <br />
        <button onClick={() => setTextColor('yellow')}>Yellow</button>
      </header>
  </div>
  )
}

export default ColorComp