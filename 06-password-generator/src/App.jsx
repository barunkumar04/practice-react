import { useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [includeNum, setIncludeNum] = useState(false)
  const [includeChar, setIncludeChar] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordGenerator = () =>{}

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      
    </>
  )
}

export default App