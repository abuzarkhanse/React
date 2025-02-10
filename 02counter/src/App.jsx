import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //   0th index  function
  // this is just a method to control 
  // the counter variable we can chnage its name
  // Thats why reacct was discoverd to make updation everywhere we call counter!

  let [Counter, setCounter] = useState(5)

  const addvalue = () => {

    setCounter(Counter + 1)
  }

  const removeValue = () => {
    setCounter(Counter - 1)
  }

  if (Counter == 21) {
    setCounter(Counter - 1)
    alert('Limit Exceed!')
    
  } else if (Counter == -1) {
    setCounter(Counter + 1)
    alert('Below 0 is not Allowed!')

  }

  return (
    <>
      <h1>Chai aur React by Abuzar Khan!</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
