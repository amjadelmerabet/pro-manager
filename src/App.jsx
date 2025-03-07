import { BrowserRouter, Route, Routes } from 'react-router';
import { LoginRoute, LandingRoute, DashboardRoute, SettingsRoute } from "./routes/index"

import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
