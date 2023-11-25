import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let counter = 10; // Don't need now, using useState hook now.

function App() {

  const [counter, setCounter] = useState(10);

  const countUp = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("Count Up - ", Math.random());
    console.log("Counter Value - ", counter);
  }
  
  const countDown = () => {
    // counter = counter - 1;
    setCounter(counter-1);
    console.log("Count down - ", Math.random());
    console.log("Counter Value - ", counter);
  }

  return (
    
    <>
      <h1>A Vite React project to understand hooks!</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={countUp}>Count Up</button><br/>
      <button onClick={countDown}>Count Down</button>
    </>
  )
}

export default App

// Function to counter up

