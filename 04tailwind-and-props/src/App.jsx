import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'> Testing Tailwind</h1>
      <div class="w-[400px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        class="h-[200px] w-full rounded-md object-cover"/>
      <div class="p-4">
      <h1 class="text-lg font-semibold">About Tailwind Framework</h1>
      <p class="mt-3 text-sm text-gray-600">
        This project is to learn and practice tailwind framework.
      </p>
      <button
        type="button"
        class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Read
      </button>
      </div>
</div>

    </>
  )
}

export default App