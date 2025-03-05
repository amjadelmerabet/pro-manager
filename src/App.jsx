import { BrowserRouter, Route, Routes } from 'react-router';
// import { LandingRoute, LoginRoute } from './routes';
import LandingRoute from './routes/LandingRoute';
import LoginRoute from './routes/LoginRoute';
import { DashboardRoute } from "./routes/index"

import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/dashboard" element={<DashboardRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
