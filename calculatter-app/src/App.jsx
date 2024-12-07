import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculatter from './component/calculatter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Calculatter />
      </div>
    </>
  )
}

export default App
