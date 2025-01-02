import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './component/describing/05_FormComponent'
import Navbar from './component/describing/00_Navbar'
import Portfolio from './component/describing/01_Portfolio'
import Skills from './component/describing/02_Skills'
import Projects from './component/describing/03_Projects'
// import TailwindPractice from './component/describing/06_tailwind_practice'
import GridExample from './component/describing/07_GridExample'
import DescribingUI from './component/describing/describing_UI'
import ArrayDemo from './component/describing/DSA/Array/00_array'
import BubbleSortDemo from './component/describing/DSA/Array/Sorting/bubble-sorting'
import InsertionSortVisualization from './component/describing/DSA/Array/Sorting/Insertion'
import MergeSortVisualization from './component/describing/DSA/Array/Sorting/Merge'

function App() {
 

  return (
    <>
    <Navbar/>
    <Portfolio/>
    <Skills/>
    <Projects/>
    <FormComponent/> 
  {/* <TailwindPractice/>
  <GridExample/> */}
   <section>
   <ArrayDemo/>
    <BubbleSortDemo/>
    <InsertionSortVisualization/>
    <MergeSortVisualization/>
    </section>




    </>
  )
}

export default App
