import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DescriptionCard from './components/DescriptionCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'> Testing Tailwind</h1>     
      <DescriptionCard /> 
      <DescriptionCard heading='JavaScript' content='This project is to learn JavaScript'/>
      <DescriptionCard heading='CSS' content='This project is to learn CSS'/>
    </>
  )
}

export default App
