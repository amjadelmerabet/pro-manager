// import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Overview from './components/overview/Overview'
import PowerfulFeatures from './components/powerful-features/PowerfulFeatures'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Overview />
        <PowerfulFeatures />
      </main>
    </div>
  )
}

export default App
