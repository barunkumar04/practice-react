import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [includeNum, setIncludeNum] = useState(false)
  const [includeChar, setIncludeChar] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let passwordComponents = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeNum) passwordComponents += "01234567890";
    if(includeChar) passwordComponents += "!@#$%^&*";

    let pass = "";

    for(let i=1; i<= length; i++){
      let index = Math.floor(Math.random() * passwordComponents.length + 1);
      pass += passwordComponents.charAt(index);
    }

    setPassword(pass);  

  }, [length, includeNum, includeChar]);

  useEffect(() => {
    passwordGenerator()
  }, [length, includeNum, includeChar, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={includeNum}
          id="numberInput"
          onChange={() => {
              setIncludeNum((prevValue) => !prevValue);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={includeChar}
              id="characterInput"
              onChange={() => {
                  setIncludeChar((prevValue) => !prevValue )
              }}
          />
          <label htmlFor="characterInput">Special Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
