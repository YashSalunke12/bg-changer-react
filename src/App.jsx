import { useState } from "react"


function App() {
const [color, setColor] = useState('skyblue');

  return (
    <div style={{backgroundColor: color}} className='w-full h-screen duration-200'>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500">Red</button>
          <button onClick={() => setColor('yellow')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400">Yellow</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500">Green</button>
          <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500">Blue</button>
          <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500">Orange</button>
          <button onClick={() => setColor('purple')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500">Purple</button>
          <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">Black</button>
        </div>
      </div>
    </div>
  )
}

function Button({setColor}) {
  return (
    <button>{color}</button>
  )
}

export default App
