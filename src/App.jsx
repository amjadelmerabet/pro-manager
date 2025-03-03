import { BrowserRouter, Route, Routes } from 'react-router';
import LandingRoute from './routes/LandingRoute';
import LoginRoute from './routes/LoginRoute';

import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingRoute />} />
          <Route path="/login" element={<LoginRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
