import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import { Component } from 'react'
import Component2 from './components/Component2'
import Component1 from './components/Component1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Welcome/>
      </div>
      
      <div>
        <Component1/>
      </div>

      <div>
        <Component2/>
      </div>
    </>
  )
}

export default App
