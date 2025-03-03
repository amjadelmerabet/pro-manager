// import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Overview from './components/overview/Overview'
import Features from './components/features/Features'
import DiveDeeper from './components/dive-deeper/DiveDeeper'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Overview />
        <Features />
        <DiveDeeper />
      </main>
    </div>
  )
}

export default App
