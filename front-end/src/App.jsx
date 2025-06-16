import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Router from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <Router/>
      </div>
    </>
  )
}

export default App
