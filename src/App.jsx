import { BrowserRouter, Route, Routes } from 'react-router';
import { LoginRoute, LandingRoute, DashboardRoute, SettingsRoute, ProjectsRoute, TasksRoute } from "./routes/index"

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
          <Route path="/projects" element={<ProjectsRoute />} />
          <Route path="/tasks" element={<TasksRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
