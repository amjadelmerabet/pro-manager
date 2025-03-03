// import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Overview from './components/overview/Overview'
import Features from './components/features/Features'
import DiveDeeper from './components/dive-deeper/DiveDeeper'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Overview />
        <Features />
        <DiveDeeper />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
