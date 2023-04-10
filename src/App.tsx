import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputWidget, {input} from "./inputWidget";
import Calculator from "./calculator";

function App() {
  const [count, setCount] = useState(0)
    const initialInput: input = {w1: 0, w2: 0, w3: 0}
    const [state, setState]: [input, ((value: (((prevState: input) => input) | input)) => void)] = useState(initialInput)
    let calcOutput = <></>
    if (state != initialInput) {
        calcOutput = Calculator(state)
    }
  return (
    <div className="App">
      <div className="card">
          <InputWidget setState={setState}/>
          {calcOutput}
      </div>
    </div>
  )
}

export default App
