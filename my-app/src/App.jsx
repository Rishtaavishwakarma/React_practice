import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './component/describing/05_FormComponent'
import Navbar from './component/describing/00_Navbar'
import Portfolio from './component/describing/01_Portfolio'
import Skills from './component/describing/02_Skills'

function App() {
 

  return (
    <>
    <Navbar/>
    <Portfolio/>
    <Skills/>
    <FormComponent/> 
    </>
  )
}

export default App
