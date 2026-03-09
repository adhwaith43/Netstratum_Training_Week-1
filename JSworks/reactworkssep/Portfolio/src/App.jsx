import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>
    </>
  )
}

export default App
